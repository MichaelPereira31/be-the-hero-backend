import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { UserType } from '@prisma/client';

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
