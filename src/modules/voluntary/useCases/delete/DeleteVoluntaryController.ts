import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteByIdVoluntaryUseCase } from './DeleteByIdVoluntaryUseCase';

export class DeleteVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;
    const userId = request.user.id;

    const deleteByIdVoluntaryUseCase = container.resolve(
      DeleteByIdVoluntaryUseCase,
    );

    await deleteByIdVoluntaryUseCase.execute({ id, userId });

    return response
      .status(201)
      .json({ message: 'Volunteer deleted successfully' });
  }
}
