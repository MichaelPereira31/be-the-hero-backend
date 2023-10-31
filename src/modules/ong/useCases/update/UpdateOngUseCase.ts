import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateOngDTO } from '../../dtos/IUpdateOngDTO';
import { IOngRepository } from '../../repository/IOngRepository';

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
