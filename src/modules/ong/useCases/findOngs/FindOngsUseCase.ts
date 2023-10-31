import { inject, injectable } from 'tsyringe';

import { Ong } from '@prisma/client';

import { IFindOngsDTO } from '../../dtos/IFindOngsDTO';
import { IOngRepository } from '../../repository/IOngRepository';

@injectable()
export class FindOngsUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute({ name, description }: IFindOngsDTO): Promise<Ong[]> {
    const ongs = await this.ongRepository.findOngs({ name, description });

    if (ongs.length === 0) {
      return this.ongRepository.findAll();
    }

    return ongs;
  }
}
