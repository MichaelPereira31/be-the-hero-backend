import { inject, injectable } from 'tsyringe';

import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteVoluntaryUsecase {
  constructor(
    @inject('VoluntaryRepository')
    readonly VoluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(id: string) {
    const Voluntary = await this.VoluntaryRepository.findById(id);

    if (!Voluntary) {
      throw new AppError('Voluntary not found');
    }

    await this.VoluntaryRepository.delete(id);
  }
}
