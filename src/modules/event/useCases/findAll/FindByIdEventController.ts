import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllEventUseCase } from './FindAllEventUseCase';

export class FindAllEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllEventUseCase = container.resolve(FindAllEventUseCase);

    const events = await findAllEventUseCase.execute();

    return response.status(200).json(events);
  }
}
