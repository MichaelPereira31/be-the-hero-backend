import { inject, injectable } from 'tsyringe';

import { IEventRepository } from '@modules/event/repositories/IEventRepository';
import { Event } from '@prisma/client';

@injectable()
export class FindAllEventUseCase {
  constructor(
    @inject('EventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async execute(): Promise<Event[]> {
    const events = await this.eventRepository.findAll();

    return events;
  }
}
