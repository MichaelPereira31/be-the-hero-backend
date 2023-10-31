import { inject, injectable } from 'tsyringe';

import { Event } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUserRepository } from '../../../user/repositories/IUserRepository';
import { ICreateEventDTO } from '../../dtos/ICreateEventDTO';
import { IEventRepository } from '../../repositories/IEventRepository';

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
