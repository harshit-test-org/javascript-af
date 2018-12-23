import { Request, Response } from 'express';
import { Prisma, User } from './generated/prisma-client';

export interface IRequest extends Request {
  userId?: string; // or any other type
  user?: User;
}

export interface MyContext {
  req: IRequest;
  res: Response;
  prisma: Prisma;
}
