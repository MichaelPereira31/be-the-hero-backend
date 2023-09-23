import { inject, injectable } from 'tsyringe';

import { ICreateOngDTO } from '@modules/ong/dtos/ICreateOngDTO';
import { IOngRepository } from '@modules/ong/repository/IOngRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';

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
