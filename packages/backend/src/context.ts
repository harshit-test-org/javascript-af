import { Request, Response } from 'express';
import { Prisma } from './generated/prisma-client';

export interface MyContext {
  req: Request;
  res: Response;
  prisma: Prisma;
}
