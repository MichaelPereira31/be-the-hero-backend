import { inject, injectable } from 'tsyringe';

import { User } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class FindUserByIdUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRespository: IUserRepository,
  ) {}

  async execute(id: string): Promise<User> {
    const user = await this.userRespository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    return user;
  }
}
