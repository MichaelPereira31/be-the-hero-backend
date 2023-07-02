import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdEmployeeUseCase } from './FindByIdEmployeeUseCase';

export class FindByIdEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdEmployeeUseCase = container.resolve(FindByIdEmployeeUseCase);

    const employee = await findByIdEmployeeUseCase.execute(id);

    return response.status(200).json(employee);
  }
}
