import { inject, injectable } from 'tsyringe';

import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { Ong } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

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
