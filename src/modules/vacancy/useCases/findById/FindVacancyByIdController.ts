import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdVacancyUseCase } from './FindByIdVacancyUseCase';

export class FindByIdVacancyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVacancyByIdUseCase = container.resolve(FindByIdVacancyUseCase);

    const vacance = await findVacancyByIdUseCase.execute(id);

    return response.status(200).json(vacance);
  }
}
