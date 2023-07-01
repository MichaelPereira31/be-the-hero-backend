import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVoluntaryUseCase } from './UpdateVoluntaryUsecase';

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

    const updateVoluntaryUsecase = container.resolve(UpdateVoluntaryUseCase);

    const Voluntary = await updateVoluntaryUsecase.execute({
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
