import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IVacancyRepository } from '../../repositories/IVacancyRepository';

@injectable()
export class DeleteVacancyUseCase {
  constructor(
    @inject('VacancyRepository')
    private readonly vacancyRepository: IVacancyRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const ong = await this.vacancyRepository.findById(id);

    if (!ong) {
      throw new AppError('Vacance not found', 400);
    }

    await this.vacancyRepository.delete(id);
  }
}
