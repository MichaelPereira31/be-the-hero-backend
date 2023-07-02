import { inject, injectable } from 'tsyringe';

import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(id: string) {
    const Voluntary = await this.voluntaryRepository.findById(id);

    if (!Voluntary) {
      throw new AppError('Voluntary not found');
    }

    await this.voluntaryRepository.delete(id);
  }
}
