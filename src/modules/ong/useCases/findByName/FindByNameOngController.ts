import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByNameOngUseCase } from './FindByNameOngUseCase';

export class FindByNameOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name } = request.params;

    const findByNameOngUseCase = container.resolve(FindByNameOngUseCase);

    const ong = await findByNameOngUseCase.execute(name);

    return response.status(200).json(ong);
  }
}
