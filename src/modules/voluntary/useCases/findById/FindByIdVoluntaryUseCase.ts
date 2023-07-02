import { inject, injectable } from 'tsyringe';

import { Voluntary } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IVoluntaryRepository } from '../../repositories/IVoluntaryRepository';

@injectable()
export class FindByIdVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(id: string): Promise<Voluntary> {
    const voluntary = await this.voluntaryRepository.findById(id);

    if (!voluntary) {
      throw new AppError('Voluntary not found', 400);
    }

    return voluntary;
  }
}
