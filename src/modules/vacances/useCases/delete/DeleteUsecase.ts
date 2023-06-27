import { inject, injectable } from 'tsyringe';

import { IVacanceRepository } from '@modules/vacances/repositories/IVacanceRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteVacanceUsecase {
  constructor(
    @inject('VacanceRepository')
    private readonly vacanceRepository: IVacanceRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const ong = await this.vacanceRepository.findById(id);

    if (!ong) {
      throw new AppError('Vacance not found', 400);
    }

    await this.vacanceRepository.delete(id);
  }
}
