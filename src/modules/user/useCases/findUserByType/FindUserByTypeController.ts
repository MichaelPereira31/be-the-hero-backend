import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindUserByTypeUseCase } from './FindUserByTypeUseCase';

export class FindUserByTypeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userType } = request.params;

    const findUserByTypeUseCase = container.resolve(FindUserByTypeUseCase);

    const users = await findUserByTypeUseCase.execute(userType);

    return response.status(200).json(users);
  }
}
