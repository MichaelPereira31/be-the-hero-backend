import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateComplaintUseCase } from './UpdateComplaintUseCase';

export class UpdateComplaintController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { description, reason, title, userId, file } = request.body;

    const updateComplaintUseCase = container.resolve(UpdateComplaintUseCase);

    const complaint = await updateComplaintUseCase.execute({
      id,
      description,
      reason,
      title,
      userId,
      file,
    });

    return response.status(201).json(complaint);
  }
}
