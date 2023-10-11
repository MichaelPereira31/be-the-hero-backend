import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdVoluntaryUseCase } from './FindByIdVoluntaryUseCase';

export class FindByIdVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userId = request.user.id;

    const findByIdVoluntaryUseCase = container.resolve(
      FindByIdVoluntaryUseCase,
    );

    const voluntary = await findByIdVoluntaryUseCase.execute({ id, userId });

    return response.status(201).json(voluntary);
  }
}
