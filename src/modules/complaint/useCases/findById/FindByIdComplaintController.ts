import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { FindByIdComplaintUseCase } from './FindByIdComplaintUseCase';

export class FindByIdComplaintController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const findByIdComplaintUseCase = container.resolve(
      FindByIdComplaintUseCase,
    );

    const complaints = await findByIdComplaintUseCase.execute(id);

    return response.status(201).json(complaints);
  }
}
