import { ICreateItemDTO } from '@modules/item/dtos/ICreateItemDTO';
import { IUpdateItemDTO } from '@modules/item/dtos/IUpdateItemDTO';
import { Item } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { IItemRepository } from '../IItemRepository';

export class ItemRepository implements IItemRepository {
  constructor(private readonly ctx = { prisma: prismaClient }) {}

  async findById(id: string): Promise<Item | null> {
    const item = await this.ctx.prisma.item.findUnique({ where: { id } });

    return item;
  }

  async create({
    title,
    description,
    reason,
    necessaryAmount,
    amountReceived,
    status,
    donationId,
  }: ICreateItemDTO): Promise<Item> {
    const item = await this.ctx.prisma.item.create({
      data: {
        title,
        description,
        reason,
        necessaryAmount,
        amountReceived,
        status,
        donationId,
      },
    });

    return item;
  }

  async update({
    id,
    title,
    description,
    reason,
    necessaryAmount,
    amountReceived,
    status,
    donationId,
  }: IUpdateItemDTO): Promise<Item> {
    const item = await this.ctx.prisma.item.update({
      where: { id },
      data: {
        title,
        description,
        reason,
        necessaryAmount,
        amountReceived,
        status,
        donationId,
      },
    });
    return item;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.item.delete({ where: { id } });
  }
}
