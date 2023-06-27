import { Voluntary } from '@prisma/client';

import { ICreateVolunteerDTO } from '../dtos/ICreateVolunteerDTO';
import { IUpdateVolunteerDTO } from '../dtos/IUpdateVolunteerDTO';

export interface IVolunteerRepository {
  returnAll(): Promise<Voluntary[]>;
  findById(id: string): Promise<Voluntary | null>;
  create(params: ICreateVolunteerDTO): Promise<Voluntary>;
  update(params: IUpdateVolunteerDTO): Promise<Voluntary>;
  delete(id: string): Promise<void>;
}
