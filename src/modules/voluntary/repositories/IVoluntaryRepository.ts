import { Voluntary } from '@prisma/client';

import { ICreateVoluntaryDTO } from '../dtos/ICreateVoluntaryDTO';
import { IFindAllVoluntaryDTO } from '../dtos/IFindAllVoluntaryDTO';
import { IFindByEventIdAndUserIdDTO } from '../dtos/IFindByEventIdAndUserIdDTO';
import { IFindByIdVoluntaryDTO } from '../dtos/IFindByIdVoluntaryDTO';
import { IUpdateVoluntaryDTO } from '../dtos/IUpdateVoluntaryDTO';

export type IVoluntaryRepository = {
  findById(params: IFindByIdVoluntaryDTO): Promise<Voluntary | null>;
  findByEventIdAndUserId(
    params: IFindByEventIdAndUserIdDTO,
  ): Promise<Voluntary[]>;
  findAll(params: IFindAllVoluntaryDTO): Promise<Voluntary[]>;
  create(params: ICreateVoluntaryDTO): Promise<Voluntary>;
  update(params: IUpdateVoluntaryDTO): Promise<Voluntary>;
  delete(id: string): Promise<void>;
};
