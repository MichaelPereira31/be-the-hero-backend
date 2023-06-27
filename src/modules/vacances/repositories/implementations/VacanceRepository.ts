import { ICreateVacanceDTO } from '@modules/vacances/dtos/ICreateVacanceDTO';
import { IUpdateVacanceDTO } from '@modules/vacances/dtos/IUpdateVacanceDTO';
import { Vacancy } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IVacanceRepository } from '../IVacanceRepository';

export class VacanceRepository implements IVacanceRepository {
  constructor(
    private readonly cxt = {
      prisma: prismaClient,
    },
  ) {}

  async createVacance({
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: ICreateVacanceDTO): Promise<Vacancy> {
    const vacance = await this.cxt.prisma.vacancy.create({
      data: {
        title,
        description,
        goal,
        role,
        numberOfPeople,
        ownerId,
      },
    });
    return vacance;
  }

  async update({
    id,
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: IUpdateVacanceDTO): Promise<Vacancy> {
    const vacance = await this.cxt.prisma.vacancy.update({
      where: { id },
      data: {
        title,
        description,
        goal,
        role,
        numberOfPeople,
        ownerId,
      },
    });

    return vacance;
  }

  async findById(id: string): Promise<Vacancy | null> {
    const ong = await this.cxt.prisma.vacancy.findUnique({ where: { id } });

    return ong;
  }

  async returnsAll(): Promise<Vacancy[]> {
    const vacances = await this.cxt.prisma.vacancy.findMany({});

    return vacances;
  }

  async delete(id: string): Promise<void> {
    await this.cxt.prisma.vacancy.delete({
      where: { id },
    });
  }
}
