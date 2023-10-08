import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEventUseCase } from './CreateEventUseCase';

export class CreateEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const userId = request.user.id;
    const { name, description, category } = request.body;

    const createEventUseCase = container.resolve(CreateEventUseCase);

    const event = createEventUseCase.execute({
      name,
      description,
      category,
      userId,
    });

    return response.status(201).json(event);
  }
}
