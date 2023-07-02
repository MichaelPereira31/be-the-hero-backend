import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVoluntaryUseCase } from './UpdateVoluntaryUseCase';

export class UpdateVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      code,
      avaliation,
      note,
      status,
      userId,
      vacancyId,
      initialAvailability,
      finalAvailability,
    } = request.body;

    const { id } = request.params;

    const updateVoluntaryUseCase = container.resolve(UpdateVoluntaryUseCase);

    const Voluntary = await updateVoluntaryUseCase.execute({
      id,
      code,
      avaliation,
      note,
      status,
      userId,
      vacancyId,
      initialAvailability,
      finalAvailability,
    });

    return response.status(200).json(Voluntary);
  }
}
