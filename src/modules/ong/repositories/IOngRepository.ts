import { Ong } from '@prisma/client';

import { ICreateOngDTO } from '../dtos/ICreateOngDTO';
import { IUpdateOngDTO } from '../dtos/IUpdateOngDTO';

export interface IOngRepository {
  findByName(name: string): Promise<Ong[]>;
  findById(id: string): Promise<Ong | null>;
  create(params: ICreateOngDTO): Promise<Ong>;
  update(params: IUpdateOngDTO): Promise<Ong>;
  delete(id: string): Promise<void>;
}
