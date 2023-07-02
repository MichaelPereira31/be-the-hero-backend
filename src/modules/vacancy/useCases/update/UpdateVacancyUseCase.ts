import { inject, injectable } from 'tsyringe';

import { IUpdateVacancyDTO } from '@modules/vacancy/dtos/IUpdateVacancyDTO';
import { IVacancyRepository } from '@modules/vacancy/repositories/IVacancyRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class UpdateVacancyUseCase {
  constructor(
    @inject('VacancyRepository')
    private readonly vacancyRepository: IVacancyRepository,
  ) {}

  async execute({
    id,
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: IUpdateVacancyDTO) {
    const vacancy = await this.vacancyRepository.findById(id);

    if (!vacancy) {
      throw new AppError('vacancy not found');
    }
    const updateVacancy = await this.vacancyRepository.update({
      id,
      title,
      description,
      goal,
      role,
      numberOfPeople,
      ownerId,
    });

    return updateVacancy;
  }
}
