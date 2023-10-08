import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteEventUseCase } from './DeleteEventUseCase';

export class DeleteEventController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEventUseCase = container.resolve(DeleteEventUseCase);

    await deleteEventUseCase.execute(id);

    return response.status(200).json({ message: 'Event deleted successfully' });
  }
}
