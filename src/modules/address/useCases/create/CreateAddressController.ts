import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAddressUseCase } from './CreateAddressUseCase';

export class CreateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const {
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
      reference,
      googleCoordinates,
    } = request.body;
    const userId = request.user.id;

    const createAddressUseCase = container.resolve(CreateAddressUseCase);

    const address = await createAddressUseCase.execute({
      userId,
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
      reference,
      googleCoordinates,
    });

    return response.status(201).json(address);
  }
}
