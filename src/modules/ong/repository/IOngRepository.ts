import { Ong } from '@prisma/client';

import { ICreateOngDTO } from '../dtos/ICreateOngDTO';
import { IFindOngsDTO } from '../dtos/IFindOngsDTO';
import { IUpdateOngDTO } from '../dtos/IUpdateOngDTO';

export interface IOngRepository {
  findOngs(params: IFindOngsDTO): Promise<Ong[] | null>;
  findAll(): Promise<Ong[]>;
  findById(id: string): Promise<Ong | null>;
  findByUserId(userId: string): Promise<Ong | null>;
  create(params: ICreateOngDTO): Promise<Ong>;
  update(params: IUpdateOngDTO): Promise<Ong>;
  delete(id: string): Promise<void>;
}
