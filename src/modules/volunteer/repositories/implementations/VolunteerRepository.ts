import { ICreateVolunteerDTO } from '@modules/volunteer/dtos/ICreateVolunteerDTO';
import { IUpdateVolunteerDTO } from '@modules/volunteer/dtos/IUpdateVolunteerDTO';
import { Voluntary } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IVolunteerRepository } from '../IVolunteerRepository';

export class VacanceRepository implements IVolunteerRepository {
  constructor(private readonly cxt = { prisma: prismaClient }) {}

  async returnAll(): Promise<Voluntary[]> {
    const volunteers = await this.cxt.prisma.voluntary.findMany({});

    return volunteers;
  }

  async findById(id: string): Promise<Voluntary | null> {
    const volunteer = await this.cxt.prisma.voluntary.findUnique({
      where: { id },
    });

    return volunteer;
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
  }: ICreateVolunteerDTO): Promise<Voluntary> {
    const volunteer = await this.cxt.prisma.voluntary.create({
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

    return volunteer;
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
  }: IUpdateVolunteerDTO): Promise<Voluntary> {
    const volunteer = await this.cxt.prisma.voluntary.update({
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

    return volunteer;
  }
}
