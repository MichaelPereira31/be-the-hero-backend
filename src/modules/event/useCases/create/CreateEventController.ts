import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateEventUseCase } from './CreateEventUseCase';

export class CreateEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id, type } = request.user;
    const { name, description, category, avatar, subject } = request.body;
    const createEventUseCase = container.resolve(CreateEventUseCase);

    const event = await createEventUseCase.execute({
      name,
      description,
      category,
      avatar,
      subject,
      userId: id,
      userType: type,
    });

    return response.status(201).json(event);
  }
}
