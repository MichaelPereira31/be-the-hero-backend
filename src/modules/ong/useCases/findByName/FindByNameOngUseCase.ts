import { inject, injectable } from 'tsyringe';

import { Ong } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IOngRepository } from '../../repositories/IOngRepository';

@injectable()
export class FindByNameOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute(name: string): Promise<Ong[]> {
    const ongs = await this.ongRepository.findByName(name);

    if (ongs.length === 0) {
      throw new AppError('Ongs not found', 404);
    }

    return ongs;
  }
}
