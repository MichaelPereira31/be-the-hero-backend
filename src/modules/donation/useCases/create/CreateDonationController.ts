import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateDonationUseCase } from './CreateDonationUseCase';

export class CreateDonationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { title, description, reason, goal, status, ownerId } = request.body;

    const createDonationUseCase = container.resolve(CreateDonationUseCase);

    const donation = await createDonationUseCase.execute({
      title,
      description,
      reason,
      goal,
      status,
      ownerId,
    });

    return response.status(201).json(donation);
  }
}
