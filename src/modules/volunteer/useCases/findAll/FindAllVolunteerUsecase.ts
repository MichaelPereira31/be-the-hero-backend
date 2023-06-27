import { inject, injectable } from 'tsyringe';

import { IVolunteerRepository } from '@modules/volunteer/repositories/IVolunteerRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindAllVolunteerUseCase {
  constructor(
    @inject('VolunteerRepository')
    readonly volunteerRepository: IVolunteerRepository,
  ) {}

  async execute(): Promise<Voluntary[]> {
    const volunteers = await this.volunteerRepository.returnAll();

    if (volunteers.length === 0) {
      throw new AppError('There is no volunteers available', 400);
    }

    return volunteers;
  }
}
