import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { DeleteEmployeeUseCase } from './DeleteEmployeeUseCase';

export class DeleteEmployeeController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteEmployeeUseCase = container.resolve(DeleteEmployeeUseCase);

    await deleteEmployeeUseCase.execute(id);

    return response.status(200).json({ message: 'successfully deleted' });
  }
}
