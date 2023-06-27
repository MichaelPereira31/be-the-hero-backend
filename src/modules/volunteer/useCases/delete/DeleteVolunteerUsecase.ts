import { inject, injectable } from 'tsyringe';

import { IVolunteerRepository } from '@modules/volunteer/repositories/IVolunteerRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteVolunteerUsecase {
  constructor(
    @inject('VolunteerRepository')
    readonly volunteerRepository: IVolunteerRepository,
  ) {}

  async execute(id: string) {
    const volunteer = await this.volunteerRepository.findById(id);

    if (!volunteer) {
      throw new AppError('Volunteer not found');
    }

    await this.volunteerRepository.delete(id);
  }
}
