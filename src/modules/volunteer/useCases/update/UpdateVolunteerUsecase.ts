import { inject, injectable } from 'tsyringe';

import { IUpdateVolunteerDTO } from '@modules/volunteer/dtos/IUpdateVolunteerDTO';
import { IVolunteerRepository } from '@modules/volunteer/repositories/IVolunteerRepository';

@injectable()
export class UpdateVolunteerUseCase {
  constructor(
    @inject('VolunteerRepository')
    private readonly volunteerRepository: IVolunteerRepository,
  ) {}

  async execute({
    id,
    code,
    avaliation,
    note,
    status,
    userId,
    vacancyId,
    initialAvailability,
    finalAvailability,
  }: IUpdateVolunteerDTO) {
    const Volunteer = await this.volunteerRepository.update({
      id,
      code,
      avaliation,
      note,
      status,
      userId,
      vacancyId,
      initialAvailability,
      finalAvailability,
    });

    return Volunteer;
  }
}
