import { Request, Response, NextFunction } from 'express';

export function isOng(
  request: Request,
  response: Response,
  next: NextFunction,
): void {
  if (request.user.type === 'ong') {
    next();
  }
  response
    .status(403)
    .json({ message: 'User does not have access permission' });
}
