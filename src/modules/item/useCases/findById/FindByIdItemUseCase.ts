import { inject, injectable } from 'tsyringe';

import { IItemRepository } from '@modules/item/repositories/IItemRepository';
import { Item } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';

@injectable()
export class FindByIdItemUseCase {
  constructor(
    @inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute(id: string): Promise<Item> {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    return item;
  }
}
