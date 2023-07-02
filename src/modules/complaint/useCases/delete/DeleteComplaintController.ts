import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteComplaintUseCase } from './DeleteComplaintUseCase';

export class DeleteComplaintController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteComplaintUseCase = container.resolve(DeleteComplaintUseCase);

    await deleteComplaintUseCase.execute(id);

    return response.status(201).json({ message: 'delete successfully' });
  }
}
