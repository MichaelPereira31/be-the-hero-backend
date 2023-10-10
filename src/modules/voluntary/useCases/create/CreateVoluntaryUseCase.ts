import { inject, injectable } from 'tsyringe';

import { ICreateVoluntaryDTO } from '@modules/voluntary/dtos/ICreateVoluntaryDTO';
import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class CreateVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute({
    eventId,
    status,
    userId,
  }: ICreateVoluntaryDTO): Promise<Voluntary> {
    const volunteersAlreadyExists =
      await this.voluntaryRepository.findByEventIdAndUserId({
        userId,
        eventId,
      });

    if (volunteersAlreadyExists.length > 0) {
      throw new AppError('User has already applied for this volunteer');
    }

    const voluntary = await this.voluntaryRepository.create({
      eventId,
      status,
      userId,
    });

    return voluntary;
  }
}
