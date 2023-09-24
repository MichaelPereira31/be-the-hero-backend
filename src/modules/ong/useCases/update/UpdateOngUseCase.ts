import { inject, injectable } from 'tsyringe';

import { IUpdateOngDTO } from '@modules/ong/dtos/IUpdateOngDTO';
import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class UpdateOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
  ) {}

  async execute({
    userId,
    name,
    description,
    objective,
    mainPhone,
    secondaryPhone,
    mainEmail,
    secondaryEmail,
  }: IUpdateOngDTO) {
    const ong = await this.ongRepository.findByUserId(userId);

    if (!ong) {
      throw new AppError('Ong not found');
    }

    const updateOng = await this.ongRepository.update({
      id: ong.id,
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
    });

    return updateOng;
  }
}
