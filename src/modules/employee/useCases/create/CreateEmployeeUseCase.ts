import { inject, injectable } from 'tsyringe';

import { Employee } from '@prisma/client';

import { ICreateEmployeeDTO } from '../../dtos/ICreateEmployeeDTO';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';

@injectable()
export class CreateEmployeeUseCase {
  constructor(
    @inject('EmployeeRepository')
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute({
    office,
    ongId,
    voluntaryId,
  }: ICreateEmployeeDTO): Promise<Employee> {
    const employee = await this.employeeRepository.create({
      office,
      ongId,
      voluntaryId,
    });

    return employee;
  }
}
