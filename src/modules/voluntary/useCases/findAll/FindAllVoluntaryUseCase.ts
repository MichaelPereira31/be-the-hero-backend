import { inject, injectable } from 'tsyringe';

import { Voluntary } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IVoluntaryRepository } from '../../repositories/IVoluntaryRepository';

@injectable()
export class FindAllVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(): Promise<Voluntary[]> {
    const volunteers = await this.voluntaryRepository.findAll();

    if (volunteers.length === 0) {
      throw new AppError('There is no volunteers available', 400);
    }

    return volunteers;
  }
}
