import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindAllUserComplaintUseCase } from './FindAllUserComplaintUseCase';

export class FindAllUserComplaintController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { userId } = request.params;

    const findAllUserComplaintUseCase = container.resolve(
      FindAllUserComplaintUseCase,
    );

    const complaints = await findAllUserComplaintUseCase.execute(userId);

    return response.status(201).json(complaints);
  }
}
