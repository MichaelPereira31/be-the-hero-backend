import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IOngRepository } from '../../repositories/IOngRepository';

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
