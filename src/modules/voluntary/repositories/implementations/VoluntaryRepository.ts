import { ICreateVoluntaryDTO } from '@modules/voluntary/dtos/ICreateVoluntaryDTO';
import { IFindAllVoluntaryDTO } from '@modules/voluntary/dtos/IFindAllVoluntaryDTO';
import { IFindByEventIdAndUserIdDTO } from '@modules/voluntary/dtos/IFindByEventIdAndUserIdDTO';
import { IUpdateVoluntaryDTO } from '@modules/voluntary/dtos/IUpdateVoluntaryDTO';
import { Voluntary } from '@prisma/client';
import prismaClient from '@shared/infra/database';

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

  async findById(id: string): Promise<Voluntary> {
    const voluntary = await this.ctx.prisma.voluntary.findUnique({
      where: { id },
    });

    return voluntary;
  }

  async findAll({ id, status }: IFindAllVoluntaryDTO): Promise<Voluntary[]> {
    const volunteers = await this.ctx.prisma.voluntary.findMany({
      where: { id, status },
    });
    return volunteers;
  }

  async create({
    eventId,
    status,
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
