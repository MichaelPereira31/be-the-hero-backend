import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdEventUseCase } from './FindByIdEventUseCase';

export class FindByIdEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdEventUseCase = container.resolve(FindByIdEventUseCase);

    const event = await findByIdEventUseCase.execute(id);

    return response.status(200).json(event);
  }
}
