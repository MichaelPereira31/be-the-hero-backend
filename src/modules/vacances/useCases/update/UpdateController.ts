import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateVacanceUseCase } from './UpdateUsecase';

export class UpdateVacanceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, goal, role, numberOfPeople, ownerId } =
      request.body;

    const { id } = request.params;

    const updateVacanceUsecase = container.resolve(UpdateVacanceUseCase);

    const vacance = await updateVacanceUsecase.execute({
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
