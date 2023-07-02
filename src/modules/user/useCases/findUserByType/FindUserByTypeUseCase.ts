import { inject, injectable } from 'tsyringe';

import { UserType } from '@prisma/client';

import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class FindUserByTypeUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute(userType: UserType) {
    const users = await this.userRepository.findUsersByType({ type: userType });

    return users;
  }
}
