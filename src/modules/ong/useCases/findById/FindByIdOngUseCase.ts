import { inject, injectable } from 'tsyringe';

import { Ong } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IOngRepository } from '../../repository/IOngRepository';

@injectable()
export class FindByIdOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute(id: string): Promise<Ong> {
    const ong = await this.ongRepository.findById(id);

    if (!ong) {
      throw new AppError('Ong not found', 404);
    }

    return ong;
  }
}
