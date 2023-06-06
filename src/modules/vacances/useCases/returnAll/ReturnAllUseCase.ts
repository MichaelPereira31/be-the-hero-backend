import { inject, injectable } from 'tsyringe';

import { IVacanceRepository } from '@modules/vacances/repositories/IVacanceRepository';
import { Vacancy } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class ReturnAllVacancesUseCase {
  constructor(
    @inject('VacanceRepository')
    private readonly vacanceRepository: IVacanceRepository,
  ) {}

  async execute(): Promise<Vacancy[]> {
    const vacances = await this.vacanceRepository.returnsAll();

    if (vacances.length === 0) {
      throw new AppError('There is no vacances available', 404);
    }

    return vacances;
  }
}
