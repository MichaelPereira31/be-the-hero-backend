import { inject, injectable } from 'tsyringe';

import { IFindOngsDTO } from '@modules/ong/dtos/IFindOngsDTO';
import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { Ong } from '@prisma/client';

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
