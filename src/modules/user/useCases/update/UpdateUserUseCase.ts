import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateUserDTO } from '../../dtos/IUpdateUserDTO';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class UpdateUserUseCase {
  constructor(
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({
    id,
    addressId,
    email,
    lastName,
    name,
    type,
  }: IUpdateUserDTO) {
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
      type,
    });

    return userUpdate;
  }
}
