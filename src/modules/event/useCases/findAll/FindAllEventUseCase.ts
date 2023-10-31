import { inject, injectable } from 'tsyringe';

import { Event } from '@prisma/client';

import { IEventRepository } from '../../repositories/IEventRepository';

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
