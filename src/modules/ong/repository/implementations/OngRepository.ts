import { Ong } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { ICreateOngDTO } from '../../dtos/ICreateOngDTO';
import { IFindOngsDTO } from '../../dtos/IFindOngsDTO';
import { IUpdateOngDTO } from '../../dtos/IUpdateOngDTO';
import { IOngRepository } from '../IOngRepository';

export class OngRepository implements IOngRepository {
  constructor(private readonly cxt = { prisma: prismaClient }) {}

  async findOngs({ name, description }: IFindOngsDTO): Promise<Ong[] | null> {
    const ongs = await this.cxt.prisma.ong.findMany({
      where: {
        OR: [
          {
            name: {
              contains: name as string,
            },
          },
          {
            description: {
              contains: description as string,
            },
          },
        ],
      },
    });

    return ongs;
  }

  async findAll(): Promise<Ong[]> {
    const ongs = await this.cxt.prisma.ong.findMany();

    return ongs;
  }

  async findById(id: string): Promise<Ong | null> {
    const ong = await this.cxt.prisma.ong.findUnique({ where: { id } });

    return ong;
  }

  async findByUserId(userId: string): Promise<Ong | null> {
    const ong = await this.cxt.prisma.ong.findUnique({ where: { userId } });

    return ong;
  }

  async create({
    description,
    mainEmail,
    mainPhone,
    name,
    objective,
    secondaryEmail,
    secondaryPhone,
    userId,
  }: ICreateOngDTO): Promise<Ong> {
    const ong = await this.cxt.prisma.ong.create({
      data: {
        name,
        description,
        objective,
        mainPhone,
        secondaryPhone,
        mainEmail,
        secondaryEmail,
        userId,
      },
    });

    return ong;
  }

  async update({
    id,
    name,
    description,
    objective,
    mainPhone,
    secondaryPhone,
    mainEmail,
    secondaryEmail,
  }: IUpdateOngDTO): Promise<Ong> {
    const ong = await this.cxt.prisma.ong.update({
      where: { id },
      data: {
        name,
        description,
        objective,
        mainPhone,
        secondaryPhone,
        mainEmail,
        secondaryEmail,
      },
    });

    return ong;
  }

  async delete(id: string): Promise<void> {
    await this.cxt.prisma.ong.delete({ where: { id } });
  }
}
