import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateVoluntaryUseCase } from './CreateVoluntaryUseCase';

export class CreateVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { eventId, status } = request.body;
    const userId = request.user.id;

    const createVoluntaryUseCase = container.resolve(CreateVoluntaryUseCase);

    const voluntary = await createVoluntaryUseCase.execute({
      eventId,
      status,
      userId,
    });

    return response.status(201).json(voluntary);
  }
}
