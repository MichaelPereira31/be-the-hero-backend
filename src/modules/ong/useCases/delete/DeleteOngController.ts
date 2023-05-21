import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteOngUseCase } from './DeleteByIdOngUseCase';

export class DeleteOngController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteOngUseCase = container.resolve(DeleteOngUseCase);

    deleteOngUseCase.execute(id);

    return response.status(200).json({ message: 'sucessfully deleted' });
  }
}
