import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateVacancyUseCase } from './CreateVacancyUseCase';

export class CreateVacancyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, goal, role, numberOfPeople, ownerId } =
      request.body;

    const createVacancyUseCase = container.resolve(CreateVacancyUseCase);

    const vacancy = await createVacancyUseCase.execute({
      title,
      description,
      goal,
      role,
      numberOfPeople,
      ownerId,
    });

    return response.status(201).send(vacancy);
  }
}
