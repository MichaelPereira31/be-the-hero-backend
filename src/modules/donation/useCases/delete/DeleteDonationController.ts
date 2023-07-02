import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteDonationUseCase } from './DeleteDonationUseCase';

export class DeleteDonationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteDonationUseCase = container.resolve(DeleteDonationUseCase);

    await deleteDonationUseCase.execute(id);

    return response.status(200).json({ message: `Successfully deleted` });
  }
}
