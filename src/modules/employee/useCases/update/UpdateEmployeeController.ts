import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateEmployeeUseCase } from './UpdateEmployeeUseCase';

export class UpdateEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { office, userId, ongId } = request.body;

    const updateEmployeeUseCase = container.resolve(UpdateEmployeeUseCase);

    const employee = await updateEmployeeUseCase.execute({
      id,
      office,
      userId,
      ongId,
    });

    return response.status(200).json(employee);
  }
}
