import { inject, injectable } from 'tsyringe';

import { IEmployeeRepository } from '@modules/employee/repositories/IEmployeeRepository';
import { AppError } from '@shared/infra/errors/AppError';

@injectable()
export class DeleteEmployeeUseCase {
  constructor(
    @inject('EmployeeRepository')
    private readonly employeeRepository: IEmployeeRepository,
  ) {}

  async execute(id: string): Promise<void> {
    const employee = await this.employeeRepository.findById(id);

    if (!employee) {
      throw new AppError('Employee not found');
    }

    await this.employeeRepository.delete(id);
  }
}
