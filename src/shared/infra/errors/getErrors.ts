import { Request, Response, NextFunction } from 'express';

import { logger } from '../../providers/logger/implementations/LoggerProvider';
import { AppError } from './AppError';

export function getErrors(
  error: Error,
  request: Request,
  response: Response,
  _: NextFunction,
) {
  logger.error(error.message);

  if (error instanceof AppError) {
    return response.status(error.statusCode).json({
      status: 'error',
      message: error.message,
    });
  }

  return response.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
  });
}
