import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdVolunteerUsecase } from './FindByIdVolunteerUsecase';

export class FindVolunteerByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVolunteerByIdUsecase = container.resolve(
      FindByIdVolunteerUsecase,
    );

    const volunteer = await findVolunteerByIdUsecase.execute(id);

    return response.status(200).json(volunteer);
  }
}
