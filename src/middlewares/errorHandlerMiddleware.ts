import { ErrorRequestHandler } from 'express';

const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  if (error.statusCode) {
    return res.sendStatus(error.statusCode);
  }

  return res.sendStatus(500);
};

export default errorHandler;
