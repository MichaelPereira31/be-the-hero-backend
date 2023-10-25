import { inject, injectable } from 'tsyringe';

import { ICreateEventDTO } from '@modules/event/dtos/ICreateEventDTO';
import { IEventRepository } from '@modules/event/repositories/IEventRepository';
import { IUserRepository } from '@modules/user/repositories/IUserRepository';
import { Event } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class CreateEventUseCase {
  constructor(
    @inject('EventRepository')
    private readonly eventRepository: IEventRepository,
    @inject('UserRepository')
    private readonly userRepository: IUserRepository,
  ) {}

  async execute({
    category,
    description,
    name,
    avatar,
    subject,
    userId,
    userType,
  }: ICreateEventDTO): Promise<Event> {
    const user = await this.userRepository.findById(userId);

    if (!user) {
      throw new AppError('User not found');
    }

    const event = await this.eventRepository.create({
      name,
      description,
      avatar,
      subject,
      userId,
      category,
      userType,
    });

    return event;
  }
}
