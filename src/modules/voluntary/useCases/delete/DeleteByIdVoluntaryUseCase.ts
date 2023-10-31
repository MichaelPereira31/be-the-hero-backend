import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IDeleteVoluntaryDTO } from '../../dtos/IDeleteVoluntaryDTO';
import { IVoluntaryRepository } from '../../repositories/IVoluntaryRepository';

@injectable()
export class DeleteByIdVoluntaryUseCase {
  constructor(
    @inject('VoluntaryRepository')
    private readonly voluntaryRepository: IVoluntaryRepository,
  ) {}

  async execute({ id, userId }: IDeleteVoluntaryDTO): Promise<void> {
    const voluntary = await this.voluntaryRepository.findById({ id, userId });

    if (!voluntary) {
      throw new AppError('Volunteer not found');
    }

    await this.voluntaryRepository.delete(id);
  }
}
