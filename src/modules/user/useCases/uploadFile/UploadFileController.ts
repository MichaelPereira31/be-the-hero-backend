import { Request, Response } from 'express';

export class UploadFileController {
  async handle(request: Request, response: Response): Promise<Response> {
    return response.status(200).json(request.body.attachment);
  }
}
