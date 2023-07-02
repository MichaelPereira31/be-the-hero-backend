import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllUseCase } from './FindAllUseCase';

export class FindAllVacancesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllUseCase = container.resolve(FindAllUseCase);

    const vacances = await findAllUseCase.execute();

    return response.status(200).json(vacances);
  }
}
