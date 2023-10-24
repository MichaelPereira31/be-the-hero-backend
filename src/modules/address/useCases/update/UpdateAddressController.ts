import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { UpdateAddressUseCase } from './UpdateAddressUseCase';

export class UpdateAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const { street, number, neighborhood, city, complement, reference, state } =
      request.body;

    const updateAddressUseCase = container.resolve(UpdateAddressUseCase);

    const address = await updateAddressUseCase.execute({
      id,
      state,
      street,
      number,
      neighborhood,
      city,
      complement,
      reference,
    });

    return response.status(200).json(address);
  }
}
