import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdVoluntaryUsecase } from './FindByIdVoluntaryUsecase';

export class FindVoluntaryByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVoluntaryByIdUsecase = container.resolve(
      FindByIdVoluntaryUsecase,
    );

    const Voluntary = await findVoluntaryByIdUsecase.execute(id);

    return response.status(200).json(Voluntary);
  }
}
