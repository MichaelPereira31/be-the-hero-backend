import { Vacancy } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { ICreateVacanceDTO } from '../dtos/ICreateVacanceDTO';
import { IVacanceRepository } from './implementations/VacanceRepository';

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
}
