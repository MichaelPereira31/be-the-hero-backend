import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllVolunteerUseCase } from './FindAllVolunteerUsecase';

export class FindAllVolunteerController {
  async handle(request: Request, response: Response): Promise<Response> {
    const returnAllVolunteerUseCase = container.resolve(
      FindAllVolunteerUseCase,
    );

    const volunteers = await returnAllVolunteerUseCase.execute();

    return response.status(200).json(volunteers);
  }
}
