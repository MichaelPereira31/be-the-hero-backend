import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindOngsUseCase } from './FindOngsUseCase';

export class FindOngsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, description } = request.query;

    const findOngsUseCase = container.resolve(FindOngsUseCase);

    const ong = await findOngsUseCase.execute({ name, description });

    return response.status(200).json(ong);
  }
}
