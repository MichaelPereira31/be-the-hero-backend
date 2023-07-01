import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllVoluntaryUseCase } from './FindAllVoluntaryUsecase';

export class FindAllVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const returnAllVoluntaryUseCase = container.resolve(
      FindAllVoluntaryUseCase,
    );

    const Voluntarys = await returnAllVoluntaryUseCase.execute();

    return response.status(200).json(Voluntarys);
  }
}
