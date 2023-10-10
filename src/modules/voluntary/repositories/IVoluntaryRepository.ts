import { Voluntary } from '@prisma/client';

import { ICreateVoluntaryDTO } from '../dtos/ICreateVoluntaryDTO';
import { IFindAllVoluntaryDTO } from '../dtos/IFindAllVoluntaryDTO';
import { IUpdateVoluntaryDTO } from '../dtos/IUpdateVoluntaryDTO';

export type IVoluntaryRepository = {
  findById(id: string): Promise<Voluntary | null>;
  findAll(params: IFindAllVoluntaryDTO): Promise<Voluntary[]>;
  create(params: ICreateVoluntaryDTO): Promise<Voluntary>;
  update(params: IUpdateVoluntaryDTO): Promise<Voluntary>;
  delete(id: string): Promise<void>;
};
