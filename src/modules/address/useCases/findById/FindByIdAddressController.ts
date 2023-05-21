import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdAddressUseCase } from './FindByIdAddressUseCase';

export class FindByIdAddressController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdAddressUseCase = container.resolve(FindByIdAddressUseCase);

    const address = await findByIdAddressUseCase.execute(id);

    return response.status(200).json(address);
  }
}
