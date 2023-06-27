import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVolunteerUseCase } from './UpdateVolunteerUsecase';

export class UpdateVolunteerController {
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

    const updateVolunteerUsecase = container.resolve(UpdateVolunteerUseCase);

    const Volunteer = await updateVolunteerUsecase.execute({
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

    return response.status(200).json(Volunteer);
  }
}
