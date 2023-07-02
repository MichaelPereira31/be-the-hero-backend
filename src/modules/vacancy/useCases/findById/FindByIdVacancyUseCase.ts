import { inject, injectable } from 'tsyringe';

import { Vacancy } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IVacancyRepository } from '../../repositories/IVacancyRepository';

@injectable()
export class FindByIdVacancyUseCase {
  constructor(
    @inject('VacancyRepository')
    private readonly vacancyRepository: IVacancyRepository,
  ) {}

  async execute(id: string): Promise<Vacancy> {
    const vacance = await this.vacancyRepository.findById(id);

    if (!vacance) {
      throw new AppError('Vacance not found', 404);
    }

    return vacance;
  }
}
