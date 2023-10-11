import { inject, injectable } from 'tsyringe';

import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
    @inject('UserRepository') private readonly userRepository: IUserRepository,
  ) {}

  async execute(userId: string): Promise<void> {
    const ong = await this.ongRepository.findByUserId(userId);

    if (!ong) {
      throw new AppError('Ong not found', 404);
    }

    await this.ongRepository.delete(ong.id);

    await this.userRepository.updateUser({ id: userId, type: 'voluntary' });
  }
}
