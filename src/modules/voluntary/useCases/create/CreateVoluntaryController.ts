import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateVoluntaryUseCase } from './CreateVoluntaryUsecase';

export class CreateVoluntaryController {
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

    const createVoluntaryUseCase = container.resolve(CreateVoluntaryUseCase);

    const Voluntary = await createVoluntaryUseCase.execute({
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
