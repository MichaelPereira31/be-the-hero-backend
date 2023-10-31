import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { ICreateOngDTO } from '../../dtos/ICreateOngDTO';
import { IOngRepository } from '../../repository/IOngRepository';

@injectable()
export class CreateOngUseCase {
  constructor(
    @inject('OngRepository') private readonly ongRepository: IOngRepository,
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
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
    const alreadyHasOng = await this.ongRepository.findByUserId(userId);

    if (alreadyHasOng) throw new AppError('Você já cadastrou uma ong.');

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

    await this.userRepository.updateUser({
      id: userId,
      type: 'ong',
    });

    return ong;
  }
}
