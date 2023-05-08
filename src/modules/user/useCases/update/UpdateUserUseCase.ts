import { inject, injectable } from 'tsyringe';

import { IUpdateUserDTO } from '@modules/user/dtos/IUpdateUserDTO';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({ id, addressId, email, lastName, name }: IUpdateUserDTO) {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    const userUpdate = await this.userRepository.updateUser({
      id,
      addressId,
      email,
      lastName,
      name,
    });

    return userUpdate;
  }
}
