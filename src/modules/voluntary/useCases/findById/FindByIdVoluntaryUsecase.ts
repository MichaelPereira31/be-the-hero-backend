import { inject, injectable } from 'tsyringe';

import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdVoluntaryUsecase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly VoluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(id: string): Promise<Voluntary> {
    const voluntary = await this.VoluntaryRepository.findById(id);

    if (!voluntary) {
      throw new AppError('Voluntary not found', 400);
    }

    return voluntary;
  }
}