import { inject, injectable } from 'tsyringe';

import { ICreateVoluntaryDTO } from '@modules/voluntary/dtos/ICreateVoluntaryDTO';

import { IVoluntaryRepository } from '../../repositories/IVoluntaryRepository';

@injectable()
export class CreateVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly iVoluntaryRepository: IVoluntaryRepository,
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
  }: ICreateVoluntaryDTO) {
    const Voluntary = await this.iVoluntaryRepository.create({
      code,
      avaliation,
      note,
      status,
      userId,
      vacancyId,
      initialAvailability,
      finalAvailability,
    });

    return Voluntary;
  }
}
