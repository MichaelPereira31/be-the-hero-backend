import { inject, injectable } from 'tsyringe';

import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindAllVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(): Promise<Voluntary[]> {
    const volunteers = await this.voluntaryRepository.findAll();

    if (volunteers.length === 0) {
      throw new AppError('There is no volunteers available', 400);
    }

    return volunteers;
  }
}
