import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdDonationUseCase } from './FindByIdDonationUseCase';

export class FindByIdDonationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdDonationUseCase = container.resolve(FindByIdDonationUseCase);

    const donation = await findByIdDonationUseCase.execute(id);

    return response.status(200).json(donation);
  }
}
