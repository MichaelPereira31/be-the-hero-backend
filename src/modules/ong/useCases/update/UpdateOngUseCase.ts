import { inject, injectable } from 'tsyringe';

import { IUpdateOngDTO } from '../../dtos/IUpdateOngDTO';
import { IOngRepository } from '../../repositories/IOngRepository';

@injectable()
export class UpdateOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute({
    id,
    name,
    description,
    objective,
    mainPhone,
    secondaryPhone,
    mainEmail,
    secondaryEmail,
    addressId,
  }: IUpdateOngDTO) {
    const ong = await this.ongRepository.update({
      id,
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
