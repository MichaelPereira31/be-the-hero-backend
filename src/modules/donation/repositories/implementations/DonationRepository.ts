import { ICreateDonationDTO } from '@modules/donation/dtos/ICreateDonationDTO';
import { IUpdateDonationDTO } from '@modules/donation/dtos/IUpdateDonationDTO';
import { Donation } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IDonationRepository } from '../IDonationRepository';

export class DonationRepository implements IDonationRepository {
  constructor(
    private readonly cxt = {
      prisma: prismaClient,
    },
  ) {}

  async findAll(): Promise<Donation[]> {
    const donations = await this.cxt.prisma.donation.findMany();

    return donations;
  }

  async findById(id: string): Promise<Donation | null> {
    const donation = await this.cxt.prisma.donation.findUnique({
      where: {
        id,
      },
    });

    return donation;
  }

  async create({
    title,
    description,
    reason,
    goal,
    status,
    ownerId,
  }: ICreateDonationDTO): Promise<Donation> {
    const donation = await this.cxt.prisma.donation.create({
      data: {
        title,
        description,
        reason,
        goal,
        status,
        ownerId,
      },
    });

    return donation;
  }

  async update({
    id,
    title,
    description,
    reason,
    goal,
    status,
    ownerId,
  }: IUpdateDonationDTO): Promise<Donation> {
    const donation = await this.cxt.prisma.donation.update({
      where: {
        id,
      },
      data: {
        title,
        description,
        reason,
        goal,
        status,
        ownerId,
      },
    });

    return donation;
  }

  async delete(id: string): Promise<void> {
    await this.cxt.prisma.donation.delete({
      where: {
        id,
      },
    });
  }
}
