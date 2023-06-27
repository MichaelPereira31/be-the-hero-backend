import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateVolunteerUseCase } from './CreateVolunteerUsecase';

export class CreateVolunteerController {
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

    const createVolunteerUseCase = container.resolve(CreateVolunteerUseCase);

    const volunteer = await createVolunteerUseCase.execute({
      code,
      avaliation,
      note,
      status,
      userId,
      vacancyId,
      initialAvailability,
      finalAvailability,
    });

    return response.status(200).json(volunteer);
  }
}
