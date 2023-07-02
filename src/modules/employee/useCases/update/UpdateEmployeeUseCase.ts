import { inject, injectable } from 'tsyringe';

import { Employee } from '@prisma/client';

import { AppError } from '../../../../shared/infra/errors/AppError';
import { IUpdateEmployeeDTO } from '../../dtos/IUpdateEmployeeDTO';
import { IEmployeeRepository } from '../../repositories/IEmployeeRepository';

@injectable()
export class UpdateEmployeeUseCase {
  constructor(
    @inject('EmployeeRepository')
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute({
    office,
    ongId,
    voluntaryId,
    id,
  }: IUpdateEmployeeDTO): Promise<Employee> {
    const employee = await this.employeeRepository.findById(id);

    if (!employee) {
      throw new AppError('Employee not found');
    }
    const updateEmployee = await this.employeeRepository.update({
      id,
      office,
      ongId,
      voluntaryId,
    });

    return updateEmployee;
  }
}
