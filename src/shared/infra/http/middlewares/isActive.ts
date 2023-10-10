import { Request, Response, NextFunction } from 'express';

export function isActive(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  if (request.user.status === 'active') {
    next();
  }
  response.status(403).json({ message: 'Inactive user.' });
}
