import { inject, injectable } from 'tsyringe';

import { IEventRepository } from '@modules/event/repositories/IEventRepository';
import { Event } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdEventUseCase {
  constructor(
    @inject('EventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async execute(id: string): Promise<Event> {
    const event = await this.eventRepository.findById(id);

    if (!event) {
      throw new AppError('Event not found');
    }

    return event;
  }
}
