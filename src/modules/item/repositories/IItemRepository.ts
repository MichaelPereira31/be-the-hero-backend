import { Item } from '@prisma/client';

import { ICreateItemDTO } from '../dtos/ICreateItemDTO';
import { IUpdateItemDTO } from '../dtos/IUpdateItemDTO';

export interface IItemRepository {
  findById(id: string): Promise<Item>;
  create(params: ICreateItemDTO): Promise<Item>;
  update(params: IUpdateItemDTO): Promise<Item>;
  delete(id: string): Promise<void>;
}
