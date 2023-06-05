import { ICreateVacanceDTO } from '@modules/vacances/dtos/ICreateVacanceDTO';
import { Vacancy } from '@prisma/client';

export type IVacanceRepository = {
  createVacance(params: ICreateVacanceDTO): Promise<Vacancy>;
  findById(id: string): Promise<Vacancy | null>;
};
