import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateVacanceUseCase } from './CreateVacanceUseCase';

export class CreateVacanceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, goal, role, numberOfPeople, ownerId } =
      request.body;

    const createVacanceUseCase = container.resolve(CreateVacanceUseCase);

    const vacance = await createVacanceUseCase.execute({
      title,
      description,
      goal,
      role,
      numberOfPeople,
      ownerId,
    });

    return response.status(201).send(vacance);
  }
}
