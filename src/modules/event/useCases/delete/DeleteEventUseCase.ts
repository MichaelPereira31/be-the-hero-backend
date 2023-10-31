import { inject, injectable } from 'tsyringe';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IEventRepository } from '../../repositories/IEventRepository';

@injectable()
export class DeleteEventUseCase {
  constructor(
    @inject('EventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const event = await this.eventRepository.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    await this.eventRepository.delete(id);
  }
}
