import { inject, injectable } from 'tsyringe';

import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindAllVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    readonly VoluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(): Promise<Voluntary[]> {
    const voluntarys = await this.VoluntaryRepository.findAll();

    if (voluntarys.length === 0) {
      throw new AppError('There is no Voluntarys available', 400);
    }

    return voluntarys;
  }
}
