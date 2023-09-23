import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, lastName, name, password } = request.body;
    const createUserUserCase = container.resolve(CreateUserUseCase);

    const user = await createUserUserCase.execute({
      email,
      lastName,
      name,
      password,
    });

    return response.status(201).json(user);
  }
}
