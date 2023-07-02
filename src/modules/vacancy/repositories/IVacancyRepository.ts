import { Vacancy } from '@prisma/client';

import { ICreateVacancyDTO } from '../dtos/ICreateVacancyDTO';
import { IUpdateVacancyDTO } from '../dtos/IUpdateVacancyDTO';

export type IVacancyRepository = {
  create(params: ICreateVacancyDTO): Promise<Vacancy>;
  findById(id: string): Promise<Vacancy | null>;
  findAll(): Promise<Vacancy[]>;
  update(params: IUpdateVacancyDTO): Promise<Vacancy>;
  delete(id: string): void;
};
