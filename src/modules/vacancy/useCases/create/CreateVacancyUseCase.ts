import { inject, injectable } from 'tsyringe';

import { ICreateVacancyDTO } from '@modules/vacancy/dtos/ICreateVacancyDTO';
import { IVacancyRepository } from '@modules/vacancy/repositories/IVacancyRepository';

@injectable()
export class CreateVacancyUseCase {
  constructor(
    @inject('VacancyRepository')
    private readonly vacancyRepository: IVacancyRepository,
  ) {}

  async execute({
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: ICreateVacancyDTO) {
    const vacance = await this.vacancyRepository.create({
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
