/* eslint-disable no-underscore-dangle */

import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ActiveUserUseCase } from './ActiveUserUseCase';

export class ActiveUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const activeUserUseCase = container.resolve(ActiveUserUseCase);

    await activeUserUseCase.execute(id);

    return response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <title>Conta Ativada</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
        }
        .success-message {
          font-size: 24px;
          color: green;
          margin-bottom: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="success-message">
          <p>Sua conta foi ativada com sucesso!</p>
        </div>
        <p>Agora você pode acessar sua conta normalmente.</p>
      </div>
    </body>
    </html>
    `);
  }
}
