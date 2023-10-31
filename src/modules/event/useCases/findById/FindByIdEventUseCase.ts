import { inject, injectable } from 'tsyringe';

import { Event } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IEventRepository } from '../../repositories/IEventRepository';

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
