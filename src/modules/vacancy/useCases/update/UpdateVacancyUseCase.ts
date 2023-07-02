import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateVacancyDTO } from '../../dtos/IUpdateVacancyDTO';
import { IVacancyRepository } from '../../repositories/IVacancyRepository';

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
