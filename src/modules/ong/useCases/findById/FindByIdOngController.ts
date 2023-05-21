import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdOngUseCase } from './FindByIdOngUseCase';

export class FindByIdOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdOngUseCase = container.resolve(FindByIdOngUseCase);

    const ong = await findByIdOngUseCase.execute(id);

    return response.status(200).json(ong);
  }
}
