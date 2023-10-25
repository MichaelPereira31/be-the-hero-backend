import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateEventUseCase } from './UpdateEventUseCase';

export class UpdateEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { name, description, category, avatar, subject } = request.body;

    const updateEventUseCase = container.resolve(UpdateEventUseCase);

    const event = await updateEventUseCase.execute({
      name,
      description,
      category,
      avatar,
      subject,
      id,
    });

    return response.status(200).json(event);
  }
}
