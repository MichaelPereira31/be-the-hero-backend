import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVacancyUseCase } from './UpdateVacancyUseCase';

export class UpdateVacancyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, goal, role, numberOfPeople, ownerId } =
      request.body;

    const { id } = request.params;

    const updateVacancyUseCase = container.resolve(UpdateVacancyUseCase);

    const vacance = await updateVacancyUseCase.execute({
      id,
      title,
      description,
      goal,
      role,
      numberOfPeople,
      ownerId,
    });

    return response.status(200).json(vacance);
  }
}
