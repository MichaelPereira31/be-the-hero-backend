/* eslint-disable no-template-curly-in-string */
import nodemailer from 'nodemailer';

import { logger } from '../providers/logger/implementations/LoggerProvider';

type IRequestDTO = {
  email: string;
  link: string;
  name: string;
};

export async function sendEmail({ email, link, name }: IRequestDTO) {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  await transport
    .sendMail({
      from: 'Equipe Be The Hero <Ativação de Conta>',
      to: email,
      subject: 'Ativação de conta',
      html: `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Ativação de Conta</title>
        <style>
          /* Estilos simples para a mensagem de e-mail */
          body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
          }
          .container {
            width: 80%;
            margin: auto;
            text-align: center;
            padding: 20px;
          }
          .header {
            background-color: #f2f2f2;
            padding: 10px;
          }
          .content {
            padding: 20px 0;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            text-decoration: none;
            border-radius: 5px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Ativação de Conta</h1>
          </div>
          <div class="content">
            <p>Olá <strong>${name}</strong>,</p>
            <p>Seu cadastro foi realizado com sucesso. Para ativar sua conta, clique no botão abaixo:</p>
            <a href="${link}" class="button">Ativar Conta</a>
            <p>Ou copie e cole o seguinte link em seu navegador:</p>
            <p>${link}</p>
            <p>Obrigado!</p>
          </div>
        </div>
      </body>
      </html>
      `,
      text: `Olá ${name} seu cadastro foi realizado com sucesso, para ativar sua conta clique no link abaixo ${link}`,
    })
    .then(() => {
      logger.info('Email enviado com sucesso');
    })
    .catch(err => {
      logger.error(err);
    });
}
