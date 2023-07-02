import { inject, injectable } from 'tsyringe';

import { ICreateOngDTO } from '../../dtos/ICreateOngDTO';
import { IOngRepository } from '../../repositories/IOngRepository';

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
    addressId,
  }: ICreateOngDTO) {
    const ong = await this.ongRepository.create({
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
      addressId,
    });

    return ong;
  }
}
