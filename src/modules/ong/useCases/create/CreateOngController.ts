import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateOngUseCase } from './CreateOngUseCase';

export class CreateOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
      addressId,
    } = request.body;

    const createOngUseCase = container.resolve(CreateOngUseCase);

    const ong = await createOngUseCase.execute({
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
      addressId,
    });

    return response.status(201).json(ong);
  }
}
