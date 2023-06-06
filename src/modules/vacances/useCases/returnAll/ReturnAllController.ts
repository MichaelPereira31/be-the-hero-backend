import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ReturnAllVacancesUseCase } from './ReturnAllUseCase';

export class ReturnAllVacancesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const returnVacancesUsecase = container.resolve(ReturnAllVacancesUseCase);

    const vacances = await returnVacancesUsecase.execute();

    return response.status(200).json(vacances);
  }
}
