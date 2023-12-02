import { NextFunction, Request, RequestHandler, Response } from 'express'

export const catchAsync = (myFunc: RequestHandler) => {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(myFunc(req, res, next)).catch((err) => next(err))
  }
}
