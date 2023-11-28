/* eslint-disable no-underscore-dangle */

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { RequestActiveUserUseCase } from './RequestActiveUserUseCase';

export class RequestActiveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.user;

    const requestActiveUserUseCase = container.resolve(
      RequestActiveUserUseCase,
    );

    await requestActiveUserUseCase.execute(email);

    return response.sendStatus(200);
  }
}
