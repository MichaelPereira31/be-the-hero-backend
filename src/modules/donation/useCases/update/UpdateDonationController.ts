import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateDonationUseCase } from './UpdateDonationUseCase';

export class UpdateDonationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, reason, goal, status, ownerId } = request.body;
    const { id } = request.params;

    const updateDonationUseCase = container.resolve(UpdateDonationUseCase);

    const donation = await updateDonationUseCase.execute({
      id,
      title,
      description,
      reason,
      goal,
      status,
      ownerId,
    });

    return response.status(200).json(donation);
  }
}
