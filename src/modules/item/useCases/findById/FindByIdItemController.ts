import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdItemUseCase } from './FindByIdItemUseCase';

export class FindByIdItemController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const findByIdItemUseCase = container.resolve(FindByIdItemUseCase);

    const item = await findByIdItemUseCase.execute(id);

    return response.status(200).json(item);
  }
}
