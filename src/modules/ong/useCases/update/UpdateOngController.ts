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
      addressId,
    } = request.body;
    const { id } = request.params;

    const updateOngUseCase = container.resolve(UpdateOngUseCase);

    const ong = await updateOngUseCase.execute({
      id,
      name,
      description,
      objective,
      mainPhone,
      secondaryPhone,
      mainEmail,
      secondaryEmail,
      addressId,
    });

    return response.status(200).json(ong);
  }
}
