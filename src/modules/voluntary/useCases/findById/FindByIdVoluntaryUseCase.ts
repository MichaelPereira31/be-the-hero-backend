import { inject, injectable } from 'tsyringe';

import { IFindByIdVoluntaryDTO } from '@modules/voluntary/dtos/IFindByIdVoluntaryDTO';
import { IVoluntaryRepository } from '@modules/voluntary/repositories/IVoluntaryRepository';
import { Voluntary } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute({ id, userId }: IFindByIdVoluntaryDTO): Promise<Voluntary> {
    const voluntary = await this.voluntaryRepository.findById({ id, userId });

    if (!voluntary) {
      throw new AppError('Volunteer not found');
    }

    return voluntary;
  }
}
