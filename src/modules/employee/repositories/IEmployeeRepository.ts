import { Employee } from '@prisma/client';

import { ICreateEmployeeDTO } from '../dtos/ICreateEmployeeDTO';
import { IUpdateEmployeeDTO } from '../dtos/IUpdateEmployeeDTO';

export interface IEmployeeRepository {
  findById(id: string): Promise<Employee | null>;
  findAllOng(ongId: string): Promise<Employee[]>;
  create(params: ICreateEmployeeDTO): Promise<Employee>;
  update(params: IUpdateEmployeeDTO): Promise<Employee>;
  delete(id: string): Promise<void>;
}
