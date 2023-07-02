import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEmployeeUseCase } from './CreateEmployeeUseCase';

export class CreateEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { office, userId, ongId } = request.body;

    const createEmployeeUseCase = container.resolve(CreateEmployeeUseCase);

    const employee = await createEmployeeUseCase.execute({
      office,
      userId,
      ongId,
    });

    return response.status(201).json(employee);
  }
}
