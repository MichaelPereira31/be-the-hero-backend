import { Complaint } from '@prisma/client';

import { ICreateComplaintDTO } from '../dtos/ICreateComplaintDTO';
import { IUpdateComplaintDTO } from '../dtos/IUpdateComplaintDTO';

export interface IComplaintRepository {
  create(params: ICreateComplaintDTO): Promise<Complaint>;
  findAllUser(userId: string): Promise<Complaint[]>;
  findById(id: string): Promise<Complaint | null>;
  update(params: IUpdateComplaintDTO): Promise<Complaint>;
  delete(id: string): Promise<void>;
}
