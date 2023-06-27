import { inject, injectable } from 'tsyringe';

import { IVolunteerRepository } from '@modules/volunteer/repositories/IVolunteerRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdVolunteerUsecase {
  constructor(
    @inject('VolunteerRepository')
    private readonly volunteerRepository: IVolunteerRepository,
  ) {}

  async execute(id: string): Promise<Voluntary> {
    const volunteer = await this.volunteerRepository.findById(id);

    if (!volunteer) {
      throw new AppError('Volunteer not found', 400);
    }

    return volunteer;
  }
}
