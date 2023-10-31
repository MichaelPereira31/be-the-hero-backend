import { inject, injectable } from 'tsyringe';

import { Voluntary } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IFindAllVoluntaryDTO } from '../../dtos/IFindAllVoluntaryDTO';
import { IVoluntaryRepository } from '../../repositories/IVoluntaryRepository';

@injectable()
export class FindAllVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute({
    status,
    userId,
  }: IFindAllVoluntaryDTO): Promise<Voluntary[]> {
    const volunteers = await this.voluntaryRepository.findAll({
      userId,
      status,
    });

    if (volunteers.length <= 0) {
      throw new AppError('Volunteers not found');
    }

    return volunteers;
  }
}
