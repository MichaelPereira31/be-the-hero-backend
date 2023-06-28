import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdDonationUseCase } from './FindByIdDonationUseCase';

export class FindByIdDonationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findbyidDonationUseCase = container.resolve(FindByIdDonationUseCase);

    await findbyidDonationUseCase.execute(id);

    return response.status(200).json({ message: `Successfully deleted` });
  }
}
