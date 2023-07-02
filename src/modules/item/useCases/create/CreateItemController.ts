import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateItemUseCase } from './CreateItemUseCase';

export class CreateItemController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description,
      reason,
      necessaryAmount,
      amountReceived,
      status,
      donationId,
    } = request.body;

    const createItemUseCase = container.resolve(CreateItemUseCase);

    const item = await createItemUseCase.execute({
      title,
      description,
      reason,
      necessaryAmount,
      amountReceived,
      status,
      donationId,
    });

    return response.status(201).json(item);
  }
}
