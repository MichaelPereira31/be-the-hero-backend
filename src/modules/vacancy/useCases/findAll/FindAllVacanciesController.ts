import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllVacanciesUseCase } from './FindAllVacanciesUseCase';

export class FindAllVacanciesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllVacanciesUseCase = container.resolve(FindAllVacanciesUseCase);

    const vacancies = await findAllVacanciesUseCase.execute();

    return response.status(200).json(vacancies);
  }
}
