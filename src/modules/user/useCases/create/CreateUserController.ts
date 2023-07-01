import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateUserUseCase } from './CreateUserUseCase';

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { addressId, email, lastName, name, password, status, type } =
      request.body;

    const createUserUserCase = container.resolve(CreateUserUseCase);

    const user = await createUserUserCase.execute({
      addressId,
      email,
      lastName,
      name,
      password,
      status,
      type,
    });

    return response.status(201).json(user);
  }
}
