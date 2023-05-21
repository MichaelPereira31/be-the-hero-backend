import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAddressUseCase } from './UpdateAddressUseCase';

export class UpdateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
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

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase);

    const address = await updateAddressUseCase.execute({
      id,
      street,
      number,
      neighborhood,
      city,
      state,
      complement,
      reference,
      googleCoordinates,
    });

    return response.status(200).json(address);
  }
}
