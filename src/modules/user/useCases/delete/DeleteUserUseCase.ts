import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUserRepository } from '../../repositories/IUserRepository';

@injectable()
export class DeleteUserUseCase {
  constructor(
    @inject('UserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const user = await this.userRepository.findById(id);

    if (!user) {
      throw new AppError('User not found', 404);
    }

    await this.userRepository.deleteUser(id);
  }
}
