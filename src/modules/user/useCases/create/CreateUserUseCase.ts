import { inject, injectable } from 'tsyringe';

import { User } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { encrypt } from '../../../../shared/utils/encrypt';
import { ICreateUserDTO } from '../../dtos/ICreateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class CreateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({
    addressId,
    email,
    lastName,
    name,
    password,
    status,
    type,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExist = await this.userRepository.findByEmail(email);

    if (userAlreadyExist) {
      throw new AppError('User already exists', 409);
    }

    const encryptedPassword = encrypt(password);

    const user = await this.userRepository.createUser({
      addressId,
      email,
      lastName,
      name,
      password: encryptedPassword,
      status,
      type,
    });

    return user;
  }
}
