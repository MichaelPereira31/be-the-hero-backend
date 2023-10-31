import { inject, injectable } from 'tsyringe';

import { Event } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateEventDTO } from '../../dtos/IUpdateEventDTO';
import { IEventRepository } from '../../repositories/IEventRepository';

@injectable()
export class UpdateEventUseCase {
  constructor(
    @inject('EventRepository')
    private readonly eventRepository: IEventRepository,
  ) {}

  async execute({
    category,
    description,
    name,
    avatar,
    subject,
    id,
  }: IUpdateEventDTO): Promise<Event> {
    const eventAlreadyExists = await this.eventRepository.findById(id);

    if (!eventAlreadyExists) {
      throw new AppError('Event not found');
    }

    const event = await this.eventRepository.update({
      name,
      description,
      avatar,
      subject,
      id,
      category,
    });

    return event;
  }
}
