import { ICreateVacanceDTO } from '@modules/vacances/dtos/ICreateVacanceDTO';
import { Vacancy } from '@prisma/client';

import { IUpdateVacanceDTO } from '../dtos/IUpdateVacanceDTO';

export type IVacanceRepository = {
  createVacance(params: ICreateVacanceDTO): Promise<Vacancy>;
  findById(id: string): Promise<Vacancy | null>;
  findAll(): Promise<Vacancy[]>;
  update(params: IUpdateVacanceDTO): Promise<Vacancy>;
  delete(id: string): void;
};
