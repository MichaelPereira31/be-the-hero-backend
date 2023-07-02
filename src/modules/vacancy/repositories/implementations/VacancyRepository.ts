import { ICreateVacancyDTO } from '@modules/vacancy/dtos/ICreateVacancyDTO';
import { IUpdateVacancyDTO } from '@modules/vacancy/dtos/IUpdateVacancyDTO';
import { Vacancy } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { IVacancyRepository } from '../IVacancyRepository';

export class VacancyRepository implements IVacancyRepository {
  constructor(
    private readonly cxt = {
      prisma: prismaClient,
    },
  ) {}

  async create({
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: ICreateVacancyDTO): Promise<Vacancy> {
    const vacancy = await this.cxt.prisma.vacancy.create({
      data: {
        title,
        description,
        goal,
        role,
        numberOfPeople,
        ownerId,
      },
    });
    return vacancy;
  }

  async update({
    id,
    title,
    description,
    goal,
    role,
    numberOfPeople,
    ownerId,
  }: IUpdateVacancyDTO): Promise<Vacancy> {
    const vacancy = await this.cxt.prisma.vacancy.update({
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

    return vacancy;
  }

  async findById(id: string): Promise<Vacancy | null> {
    const ong = await this.cxt.prisma.vacancy.findUnique({ where: { id } });

    return ong;
  }

  async findAll(): Promise<Vacancy[]> {
    const vacancies = await this.cxt.prisma.vacancy.findMany();

    return vacancies;
  }

  async delete(id: string): Promise<void> {
    await this.cxt.prisma.vacancy.delete({
      where: { id },
    });
  }
}
