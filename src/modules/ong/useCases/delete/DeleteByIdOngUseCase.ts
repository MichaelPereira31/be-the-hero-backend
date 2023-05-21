import { inject, injectable } from 'tsyringe';

import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const ong = await this.ongRepository.findById(id);

    if (!ong) {
      throw new AppError('Ong not found', 404);
    }

    await this.ongRepository.delete(id);
  }
}
