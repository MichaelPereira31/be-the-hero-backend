import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByIdUseCase } from './FindUserByIdUseCase';

export class FindUserByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const findByIdUseCase = container.resolve(FindUserByIdUseCase);

    const user = await findByIdUseCase.execute(id);

    return response.status(200).json(user);
  }
}
