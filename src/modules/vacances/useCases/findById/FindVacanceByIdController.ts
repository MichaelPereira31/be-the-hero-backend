import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdVacanceUseCase } from './FindVacanceByIdUseCase';

export class FindVacanceByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVacanceByIdUseCase = container.resolve(FindByIdVacanceUseCase);

    const vacance = await findVacanceByIdUseCase.execute(id);

    return response.status(200).json(vacance);
  }
}
