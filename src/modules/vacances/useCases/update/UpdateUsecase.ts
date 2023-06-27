import { inject, injectable } from 'tsyringe';

import { IUpdateVacanceDTO } from '@modules/vacances/dtos/IUpdateVacanceDTO';
import { VacanceRepository } from '@modules/vacances/repositories/implementations/VacanceRepository';

@injectable()
export class UpdateVacanceUseCase {
  constructor(
    @inject('VacanceRepository')
    private readonly vacanceRepository: VacanceRepository,
  ) {}

  async execute({
    id,
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: IUpdateVacanceDTO) {
    const vacance = await this.vacanceRepository.update({
      id,
      title,
      description,
      goal,
      role,
      numberOfPeople,
      ownerId,
    });

    return vacance;
  }
}
