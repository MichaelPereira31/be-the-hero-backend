import { inject, injectable } from 'tsyringe';

import { VacanceRepository } from '@modules/vacances/repositories/IVacanceRepository';
import { Vacancy } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdVacanceUseCase {
  constructor(
    @inject('VacanceRepository')
    private readonly vacanceRepository: VacanceRepository,
  ) {}

  async execute(id: string): Promise<Vacancy> {
    const vacance = await this.vacanceRepository.findById(id);

    if (!vacance) {
      throw new AppError('Vacance not found', 404);
    }

    return vacance;
  }
}
