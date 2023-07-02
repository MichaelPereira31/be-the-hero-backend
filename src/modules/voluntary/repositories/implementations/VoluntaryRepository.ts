import { ICreateVoluntaryDTO } from '@modules/voluntary/dtos/ICreateVoluntaryDTO';
import { IUpdateVoluntaryDTO } from '@modules/voluntary/dtos/IUpdateVoluntaryDTO';
import { Voluntary } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IVoluntaryRepository } from '../IVoluntaryRepository';

export class VoluntaryRepository implements IVoluntaryRepository {
  constructor(private readonly cxt = { prisma: prismaClient }) {}

  async findAll(): Promise<Voluntary[]> {
    const volunteers = await this.cxt.prisma.voluntary.findMany({});

    return volunteers;
  }

  async findById(id: string): Promise<Voluntary | null> {
    const voluntary = await this.cxt.prisma.voluntary.findUnique({
      where: { id },
    });

    return voluntary;
  }

  async delete(id: string): Promise<void> {
    await this.cxt.prisma.voluntary.delete({
      where: { id },
    });
  }

  async create({
    code,
    avaliation,
    note,
    status,
    userId,
    vacancyId,
    initialAvailability,
    finalAvailability,
  }: ICreateVoluntaryDTO): Promise<Voluntary> {
    const voluntary = await this.cxt.prisma.voluntary.create({
      data: {
        code,
        avaliation,
        note,
        status,
        userId,
        vacancyId,
        initialAvailability,
        finalAvailability,
      },
    });

    return voluntary;
  }

  async update({
    id,
    code,
    avaliation,
    note,
    status,
    userId,
    vacancyId,
    initialAvailability,
    finalAvailability,
  }: IUpdateVoluntaryDTO): Promise<Voluntary> {
    const voluntary = await this.cxt.prisma.voluntary.update({
      where: { id },
      data: {
        code,
        avaliation,
        note,
        status,
        userId,
        vacancyId,
        initialAvailability,
        finalAvailability,
      },
    });

    return voluntary;
  }
}
