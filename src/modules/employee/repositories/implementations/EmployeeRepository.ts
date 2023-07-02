import { Employee } from '@prisma/client';

import prismaClient from '../../../../shared/infra/database';
import { ICreateEmployeeDTO } from '../../dtos/ICreateEmployeeDTO';
import { IUpdateEmployeeDTO } from '../../dtos/IUpdateEmployeeDTO';
import { IEmployeeRepository } from '../IEmployeeRepository';

export class EmployeeRepository implements IEmployeeRepository {
  constructor(private readonly ctx = { prisma: prismaClient }) {}
  async findAllOng(ongId: string): Promise<Employee[]> {
    const employees = await this.ctx.prisma.employee.findMany({
      where: { ongId },
    });

    return employees;
  }

  async findById(id: string): Promise<Employee | null> {
    const employee = await this.ctx.prisma.employee.findUnique({
      where: { id },
    });

    return employee;
  }

  async create({
    office,
    ongId,
    voluntaryId,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = await this.ctx.prisma.employee.create({
      data: { office, ongId, voluntaryId },
    });

    return employee;
  }

  async update({
    id,
    office,
    ongId,
    voluntaryId,
  }: IUpdateEmployeeDTO): Promise<Employee> {
    const employee = await this.ctx.prisma.employee.update({
      where: { id },
      data: { office, ongId, voluntaryId },
    });

    return employee;
  }

  async delete(id: string): Promise<void> {
    await this.ctx.prisma.employee.delete({ where: { id } });
  }
}
