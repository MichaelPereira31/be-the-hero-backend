import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteAddressUseCase } from '@modules/address/useCases/delete/DeleteAddressUseCase';

export class DeleteVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteAddressUseCase = container.resolve(DeleteAddressUseCase);

    await deleteAddressUseCase.execute(id);

    return response.status(200).json({
      message: 'deleted successfully',
    });
  }
}
