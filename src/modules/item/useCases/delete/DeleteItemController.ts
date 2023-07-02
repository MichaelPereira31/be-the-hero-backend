import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteItemUseCase } from './DeleteItemUseCase';

export class DeleteItemController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteItemUseCase = container.resolve(DeleteItemUseCase);

    await deleteItemUseCase.execute(id);

    return response.status(200).json({ message: `Successfully deleted` });
  }
}
