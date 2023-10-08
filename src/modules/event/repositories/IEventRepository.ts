import { Event } from '@prisma/client';

import { ICreateEventDTO } from '../dtos/ICreateEventDTO';
import { IUpdateEventDTO } from '../dtos/IUpdateEventDTO';

export type IEventRepository = {
  findById(id: string): Promise<Event>;
  create(params: ICreateEventDTO): Promise<Event>;
  update(params: IUpdateEventDTO): Promise<Event>;
  delete(id: string): Promise<void>;
};
