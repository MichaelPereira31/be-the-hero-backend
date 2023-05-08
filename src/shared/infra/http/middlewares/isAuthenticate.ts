import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

import authConfig from '@config/auth';
import { AppError } from '@shared/infra/errors/AppError';

interface ITokenPayload {
  iat: number;
  exp: number;
  userId: string;
  email: string;
}
export function isAuthenticate(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError('JWT token is missing  ');
  }

  const [, token] = authHeader.split(' ');

  try {
    const decodeToken = verify(token, authConfig.jwt.secret);
    const { userId, email } = decodeToken as ITokenPayload;

    request.user = {
      id: userId,
      email,
    };

    return next();
  } catch (err) {
    throw new AppError('Invalid JWT token');
  }
}
