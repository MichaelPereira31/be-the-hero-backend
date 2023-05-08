import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateUserUseCase } from './UpdateUserUseCase';

export class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.user;
    const { addressId, email, lastName, name } = request.body;

    const updateUserUseCase = container.resolve(UpdateUserUseCase);

    const user = await updateUserUseCase.execute({
      id,
      addressId,
      email,
      lastName,
      name,
    });

    return response.status(200).json(user);
  }
}
