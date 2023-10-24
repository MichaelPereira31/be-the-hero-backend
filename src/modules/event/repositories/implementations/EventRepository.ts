import { ICreateEventDTO } from '@modules/event/dtos/ICreateEventDTO';
import { IUpdateEventDTO } from '@modules/event/dtos/IUpdateEventDTO';
import { Event } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IEventRepository } from '../IEventRepository';

export class EventRepository implements IEventRepository {
  constructor(
    private readonly ctx = {
      prisma: prismaClient,
    },
  ) {}

  async findAll(): Promise<Event[]> {
    const events = await this.ctx.prisma.event.findMany();

    return events;
  }

  async findById(id: string): Promise<Event | null> {
    const event = await this.ctx.prisma.event.findUnique({ where: { id } });
    return event;
  }

  async create({
    category,
    description,
    name,
    userId,
    userType,
  }: ICreateEventDTO): Promise<Event> {
    const event = await this.ctx.prisma.event.create({
      data: { category, description, name, userId, userType },
    });

    return event;
  }

  async update({
    id,
    category,
    description,
    name,
  }: IUpdateEventDTO): Promise<Event> {
    const event = await this.ctx.prisma.event.update({
      where: { id },
      data: { category, description, name },
    });

    return event;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.event.delete({ where: { id } });
  }
}
