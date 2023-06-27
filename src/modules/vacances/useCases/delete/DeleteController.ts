import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteVacanceUsecase } from './DeleteUsecase';

export class DeleteVacanceController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVacanceUsecase = container.resolve(DeleteVacanceUsecase);

    deleteVacanceUsecase.execute(id);

    return response.status(200).json({
      message: 'Vacance sucessfully deleted',
    });
  }
}
