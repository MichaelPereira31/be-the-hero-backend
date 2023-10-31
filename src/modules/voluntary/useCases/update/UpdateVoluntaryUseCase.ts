import { inject, injectable } from 'tsyringe';

import { Voluntary } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateVoluntaryDTO } from '../../dtos/IUpdateVoluntaryDTO';
import { IVoluntaryRepository } from '../../repositories/IVoluntaryRepository';

@injectable()
export class UpdateVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute({
    id,
    status,
    userId,
  }: IUpdateVoluntaryDTO): Promise<Voluntary> {
    const voluntaryExists = await this.voluntaryRepository.findById({
      id,
      userId,
    });

    if (!voluntaryExists) {
      throw new AppError('Volunteer not found');
    }

    const voluntary = await this.voluntaryRepository.update({
      id,
      status,
    });

    return voluntary;
  }
}
