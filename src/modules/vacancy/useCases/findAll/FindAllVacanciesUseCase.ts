import { inject, injectable } from 'tsyringe';

import { Vacancy } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IVacancyRepository } from '../../repositories/IVacancyRepository';

@injectable()
export class FindAllVacanciesUseCase {
  constructor(
    @inject('VacancyRepository')
    private readonly vacancyRepository: IVacancyRepository,
  ) {}

  async execute(): Promise<Vacancy[]> {
    const vacancies = await this.vacancyRepository.findAll();

    if (vacancies.length === 0) {
      throw new AppError('There is no vacancies available', 404);
    }

    return vacancies;
  }
}
