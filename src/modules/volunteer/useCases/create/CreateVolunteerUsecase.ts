import { inject, injectable } from 'tsyringe';

import { ICreateVolunteerDTO } from '@modules/volunteer/dtos/ICreateVolunteerDTO';

import { IVolunteerRepository } from '../../repositories/IVolunteerRepository';

@injectable()
export class CreateVolunteerUseCase {
  constructor(
    @inject('VolunteerRepository')
    private readonly iVolunteerRepository: IVolunteerRepository,
  ) {}

  async execute({
    code,
    avaliation,
    note,
    status,
    userId,
    vacancyId,
    initialAvailability,
    finalAvailability,
  }: ICreateVolunteerDTO) {
    const volunteer = await this.iVolunteerRepository.create({
      code,
      avaliation,
      note,
      status,
      userId,
      vacancyId,
      initialAvailability,
      finalAvailability,
    });

    return volunteer;
  }
}
