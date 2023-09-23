/* eslint-disable no-underscore-dangle */
import jwt from 'jsonwebtoken';
import { inject, injectable } from 'tsyringe';

import authConfig from '@config/auth';
import { IAuthenticateDTO } from '@modules/user/dtos/IAuthenticateDTO';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { decrypt } from '../../../../shared/utils/decrypt';
import { UserRepository } from '../../repositories/implementations/UserRepository';

@injectable()
export class AuthenticateUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: UserRepository,
  ) {}

  async execute({ password, email }: IAuthenticateDTO): Promise<string> {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new AppError(`User not found`, 404);
    }

    const decryptedPassword = decrypt(user.password);

    if (decryptedPassword !== password) {
      throw new AppError('Error authenticating', 401);
    }

    const token = jwt.sign(
      {
        userId: user.id,
        email: user.email,
        type: user.type,
        status: user.status,
      },
      authConfig.jwt.secret,
      {
        expiresIn: authConfig.jwt.expiresIn,
      },
    );

    return token;
  }
}
