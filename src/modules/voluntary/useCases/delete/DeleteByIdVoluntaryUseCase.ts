import { inject, injectable } from 'tsyringe';

import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteByIdVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const voluntary = await this.voluntaryRepository.findById(id);

    if (!voluntary) {
      throw new AppError('Volunteer not found');
    }

    await this.voluntaryRepository.delete(id);
  }
}
