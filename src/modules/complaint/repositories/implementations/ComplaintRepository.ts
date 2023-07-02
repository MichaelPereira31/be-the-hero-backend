import { ICreateComplaintDTO } from '@modules/complaint/dtos/ICreateComplaintDTO';
import { IUpdateComplaintDTO } from '@modules/complaint/dtos/IUpdateComplaintDTO';
import { Complaint } from '@prisma/client';
import prismaClient from '@shared/infra/database';

import { IComplaintRepository } from '../IComplaintRepository';

export class ComplaintRepository implements IComplaintRepository {
  constructor(private readonly ctx = { prisma: prismaClient }) {}

  async create({
    description,
    reason,
    title,
    file,
    userId,
  }: ICreateComplaintDTO): Promise<Complaint> {
    const complaint = await this.ctx.prisma.complaint.create({
      data: { description, title, file, userId, reason },
    });
    return complaint;
  }

  async findAllUser(userId: string): Promise<Complaint[]> {
    const complaints = await this.ctx.prisma.complaint.findMany({
      where: { userId },
    });
    return complaints;
  }

  async findById(id: string): Promise<Complaint | null> {
    const complaint = await this.ctx.prisma.complaint.findUnique({
      where: { id },
    });
    return complaint;
  }

  async update({
    id,
    description,
    file,
    title,
    reason,
  }: IUpdateComplaintDTO): Promise<Complaint> {
    const complaint = await this.ctx.prisma.complaint.update({
      where: { id },
      data: { description, file, title, reason },
    });
    return complaint;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.complaint.delete({ where: { id } });
  }
}
