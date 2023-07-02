import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateComplaintUseCase } from './CreateComplaintUseCase';

export class CreateComplaintController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { description, reason, title, userId, file } = request.body;

    const createComplaintUseCase = container.resolve(CreateComplaintUseCase);

    const complaint = await createComplaintUseCase.execute({
      description,
      reason,
      title,
      userId,
      file,
    });

    return response.status(201).json(complaint);
  }
}
