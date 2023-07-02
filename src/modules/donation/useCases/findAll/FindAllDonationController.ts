import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllDonationUseCase } from './FindAllDonationUseCase';

export class FindAllDonationController {
  async handle(request: Request, response: Response): Promise<Response> {
    const findAllDonationUseCase = container.resolve(FindAllDonationUseCase);

    const donations = await findAllDonationUseCase.execute();

    return response.status(200).json(donations);
  }
}
