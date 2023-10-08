import { inject, injectable } from 'tsyringe';

import { IEventRepository } from '@modules/event/repositories/IEventRepository';
import { AppError } from '@shared/infra/errors/AppError';

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
