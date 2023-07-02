import { inject, injectable } from 'tsyringe';

import { IEmployeeRepository } from '@modules/employee/repositories/IEmployeeRepository';
import { Employee } from '@prisma/client';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class FindByIdEmployeeUseCase {
  constructor(
    @inject('EmployeeRepository')
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string): Promise<Employee> {
    const employee = await this.employeeRepository.findById(id);

    if (!employee) {
      throw new AppError('Employee not found');
    }
    return employee;
  }
}
