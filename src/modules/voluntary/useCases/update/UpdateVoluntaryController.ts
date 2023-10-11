import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVoluntaryUseCase } from './UpdateVoluntaryUseCase';

export class UpdateVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { status } = request.body;
    const { id } = request.params;
    const userId = request.user.id;

    const updateVoluntaryUseCase = container.resolve(UpdateVoluntaryUseCase);

    const voluntary = await updateVoluntaryUseCase.execute({
      id,
      status,
      userId,
    });

    return response.status(201).json(voluntary);
  }
}
