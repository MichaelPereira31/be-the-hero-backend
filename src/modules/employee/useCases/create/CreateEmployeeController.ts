import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

export class CreateEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { office, voluntaryId, ongId } = request.body;

    const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);

    const employee = await createEmployeeUseCase.execute({
      office,
      voluntaryId,
      ongId,
    });

    return response.status(201).json(employee);
  }
}
