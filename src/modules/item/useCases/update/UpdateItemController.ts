import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateItemUseCase } from './UpdateItemUseCase';

export class UpdateItemController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const {
      title,
      description,
      reason,
      necessaryAmount,
      amountReceived,
      status,
      donationId,
    } = request.body;

    const updateItemUseCase = container.resolve(UpdateItemUseCase);

    const item = await updateItemUseCase.execute({
      id,
      title,
      description,
      reason,
      necessaryAmount,
      amountReceived,
      status,
      donationId,
    });

    return response.status(200).json(item);
  }
}
