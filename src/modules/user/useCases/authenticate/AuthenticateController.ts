import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateUseCase } from './AuthenticateUseCase';

export class AuthenticateController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;
    const authenticateUseCase = container.resolve(AuthenticateUseCase);

    const token = await authenticateUseCase.execute({ email, password });

    return response.status(200).json(token);
  }
}
