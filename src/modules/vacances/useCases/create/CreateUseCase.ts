import { inject, injectable } from 'tsyringe';

import { ICreateVacanceDTO } from '@modules/vacances/dtos/ICreateVacanceDTO';

import { VacanceRepository } from '../../repositories/IVacanceRepository';

@injectable()
export class CreateVacanceUseCase {
  constructor(
    @inject('VacanceRepository')
    private readonly vacanceRepository: VacanceRepository,
  ) {}

  async execute({
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: ICreateVacanceDTO) {
    const vacance = await this.vacanceRepository.createVacance({
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
