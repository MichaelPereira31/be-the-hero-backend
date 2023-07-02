import { inject, injectable } from 'tsyringe';

import { IItemRepository } from '@modules/item/repositories/IItemRepository';

import { AppError } from '../../../../shared/infra/errors/AppError';

@injectable()
export class DeleteItemUseCase {
  constructor(
    @inject('ItemRepository')
    private readonly itemRepository: IItemRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const item = await this.itemRepository.findById(id);

    if (!item) {
      throw new AppError('Item not found', 404);
    }

    await this.itemRepository.delete(id);
  }
}
