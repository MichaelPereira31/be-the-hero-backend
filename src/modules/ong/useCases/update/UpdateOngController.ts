import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateOngUseCase } from './UpdateOngUseCase';

export class UpdateOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
    } = request.body;
    const userId = request.user.id;

    const updateOngUseCase = container.resolve(UpdateOngUseCase);

    const ong = await updateOngUseCase.execute({
      userId,
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
    });

    return response.status(200).json(ong);
  }
}
