import { Request, Response, NextFunction } from 'express';

function responseFormatter(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  const originalJsonCallback = response.json;

  response.json = (data: unknown) => {
    response.setHeader('Content-Type', 'application/json');

    const newData = {
      data,
      code: response.statusCode,
      success: response.statusCode < 400,
    };

    return originalJsonCallback.call(response, newData);
  };

  next();
}

export default responseFormatter;
