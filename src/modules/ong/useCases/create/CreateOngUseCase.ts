import { inject, injectable } from 'tsyringe';

import { ICreateOngDTO } from '@modules/ong/dtos/ICreateOngDTO';
import { IOngRepository } from '@modules/ong/repository/IOngRepository';

@injectable()
export class CreateOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute({
    name,
    description,
    objective,
    mainPhone,
    secondaryPhone,
    mainEmail,
    secondaryEmail,
    userId,
  }: ICreateOngDTO) {
    const ong = await this.ongRepository.create({
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
      userId,
    });

    return ong;
  }
}
