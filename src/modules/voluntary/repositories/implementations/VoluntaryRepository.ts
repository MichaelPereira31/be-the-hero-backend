import { Voluntary } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { ICreateVoluntaryDTO } from '../../dtos/ICreateVoluntaryDTO';
import { IFindAllVoluntaryDTO } from '../../dtos/IFindAllVoluntaryDTO';
import { IFindByEventIdAndUserIdDTO } from '../../dtos/IFindByEventIdAndUserIdDTO';
import { IFindByIdVoluntaryDTO } from '../../dtos/IFindByIdVoluntaryDTO';
import { IUpdateVoluntaryDTO } from '../../dtos/IUpdateVoluntaryDTO';
import { IVoluntaryRepository } from '../IVoluntaryRepository';

export class VoluntaryRepository implements IVoluntaryRepository {
  constructor(private readonly ctx = { prisma: prismaClient }) {}
  async findByEventIdAndUserId({
    eventId,
    userId,
  }: IFindByEventIdAndUserIdDTO): Promise<Voluntary[]> {
    const volunteers = await this.ctx.prisma.voluntary.findMany({
      where: { userId, eventId },
    });

    return volunteers;
  }

  async findById({ id, userId }: IFindByIdVoluntaryDTO): Promise<Voluntary> {
    const voluntary = await this.ctx.prisma.voluntary.findFirst({
      where: { id, userId },
    });

    return voluntary;
  }

  async findAll({
    userId,
    status,
  }: IFindAllVoluntaryDTO): Promise<Voluntary[]> {
    const volunteers = await this.ctx.prisma.voluntary.findMany({
      where: { userId, status },
    });
    return volunteers;
  }

  async create({
    eventId,
    status = 'waiting',
    userId,
  }: ICreateVoluntaryDTO): Promise<Voluntary> {
    const voluntary = await this.ctx.prisma.voluntary.create({
      data: { eventId, status, userId },
    });
    return voluntary;
  }

  async update({ id, status }: IUpdateVoluntaryDTO): Promise<Voluntary> {
    const voluntary = await this.ctx.prisma.voluntary.update({
      where: { id },
      data: { status },
    });

    return voluntary;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.voluntary.delete({ where: { id } });
  }
}
