import { inject, injectable } from 'tsyringe';

import { IVacancyRepository } from '@modules/vacancy/repositories/IVacancyRepository';
import { Vacancy } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

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
