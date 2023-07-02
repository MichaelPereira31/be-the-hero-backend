import { inject, injectable } from 'tsyringe';

import { IVacancyRepository } from '@modules/vacancy/repositories/IVacancyRepository';
import { Vacancy } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

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
