import { inject, injectable } from 'tsyringe';

import { ICreateItemDTO } from '@modules/item/dtos/ICreateItemDTO';
import { IItemRepository } from '@modules/item/repositories/IItemRepository';
import { Item } from '@prisma/client';

@injectable()
export class CreateItemUseCase {
  constructor(
    @inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute({
    title,
    description,
    reason,
    necessaryAmount,
    amountReceived,
    status,
    donationId,
  }: ICreateItemDTO): Promise<Item> {
    const item = await this.itemRepository.create({
      title,
      description,
      reason,
      necessaryAmount,
      amountReceived,
      status,
      donationId,
    });

    return item;
  }
}
