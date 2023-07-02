import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdVoluntaryUseCase } from './FindByIdVoluntaryUseCase';

export class FindByIdVoluntaryController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findVoluntaryByIdUseCase = container.resolve(
      FindByIdVoluntaryUseCase,
    );

    const Voluntary = await findVoluntaryByIdUseCase.execute(id);

    return response.status(200).json(Voluntary);
  }
}
