import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllVoluntaryUseCase } from './FindAllVoluntaryUseCase';

export class FindAllVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { status } = request.query as any;

    const findAllVoluntaryUseCase = container.resolve(FindAllVoluntaryUseCase);

    const voluntary = await findAllVoluntaryUseCase.execute({ userId, status });

    return response.status(201).json(voluntary);
  }
}
