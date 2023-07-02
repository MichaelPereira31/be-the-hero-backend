import { Voluntary } from '@prisma/client';

import { ICreateVoluntaryDTO } from '../dtos/ICreateVoluntaryDTO';
import { IUpdateVoluntaryDTO } from '../dtos/IUpdateVoluntaryDTO';

export interface IVoluntaryRepository {
  findAll(): Promise<Voluntary[]>;
  findById(id: string): Promise<Voluntary | null>;
  create(params: ICreateVoluntaryDTO): Promise<Voluntary>;
  update(params: IUpdateVoluntaryDTO): Promise<Voluntary>;
  delete(id: string): Promise<void>;
}
