import { inject, injectable } from 'tsyringe';

import { ICreateEmployeeDTO } from '@modules/employee/dtos/ICreateEmployeeDTO';
import { IEmployeeRepository } from '@modules/employee/repositories/IEmployeeRepository';
import { Employee } from '@prisma/client';

@injectable()
export class CreateEmployeeUseCase {
  constructor(
    @inject('EmployeeRepository')
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute({
    office,
    ongId,
    userId,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = await this.employeeRepository.create({
      office,
      ongId,
      userId,
    });

    return employee;
  }
}
