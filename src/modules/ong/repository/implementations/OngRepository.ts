import { ICreateOngDTO } from '@modules/ong/dtos/ICreateOngDTO';
import { IUpdateOngDTO } from '@modules/ong/dtos/IUpdateOngDTO';
import { Ong } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IOngRepository } from '../IOngRepository';

export class OngRepository implements IOngRepository {
  constructor(private readonly cxt = { prisma: prismaClient }) {}

  async findByName(name: string): Promise<Ong[]> {
    const ongs = await this.cxt.prisma.ong.findMany({ where: { name } });

    return ongs;
  }

  async findById(id: string): Promise<Ong | null> {
    const ong = await this.cxt.prisma.ong.findUnique({ where: { id } });

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
