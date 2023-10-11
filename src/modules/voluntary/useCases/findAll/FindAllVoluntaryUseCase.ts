import { inject, injectable } from 'tsyringe';

import { IFindAllVoluntaryDTO } from '@modules/voluntary/dtos/IFindAllVoluntaryDTO';
import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

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
