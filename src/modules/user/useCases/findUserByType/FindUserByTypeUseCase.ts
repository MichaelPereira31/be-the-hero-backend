import { inject, injectable } from 'tsyringe';

import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { UserType } from '@prisma/client';

@injectable()
export class FindUserByTypeUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRespository: IUserRepository,
  ) {}

  async execute(userType: any) {
    const type = UserType[userType || 'ong'];

    const users = await this.userRespository.findUsersByType({ type });

    return users;
  }
}
