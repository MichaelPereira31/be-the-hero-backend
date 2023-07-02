import { inject, injectable } from 'tsyringe';

import { IUpdateItemDTO } from '@modules/item/dtos/IUpdateItemDTO';
import { IItemRepository } from '@modules/item/repositories/IItemRepository';
import { Item } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';

@injectable()
export class UpdateItemUseCase {
  constructor(
    @inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute({
    id,
    title,
    description,
    reason,
    necessaryAmount,
    amountReceived,
    status,
    donationId,
  }: IUpdateItemDTO): Promise<Item> {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    const itemUpdate = await this.itemRepository.update({
      id,
      title,
      description,
      reason,
      necessaryAmount,
      amountReceived,
      status,
      donationId,
    });

    return itemUpdate;
  }
}
