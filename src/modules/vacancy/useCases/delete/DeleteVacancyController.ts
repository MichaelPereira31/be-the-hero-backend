import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteVacancyUseCase } from './DeleteVacancyUseCase';

export class DeleteVacancyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteVacancyUseCase = container.resolve(DeleteVacancyUseCase);

    deleteVacancyUseCase.execute(id);

    return response.status(200).json({
      message: 'Vacance sucessfully deleted',
    });
  }
}
