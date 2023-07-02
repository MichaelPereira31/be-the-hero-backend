import { inject, injectable } from 'tsyringe';

import { IUpdateVoluntaryDTO } from '@modules/voluntary/dtos/IUpdateVoluntaryDTO';
import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';

@injectable()
export class UpdateVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
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
  }: IUpdateVoluntaryDTO) {
    const Voluntary = await this.voluntaryRepository.update({
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

    return Voluntary;
  }
}
