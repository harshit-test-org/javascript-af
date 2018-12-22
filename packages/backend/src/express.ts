import express from 'express';
import server, { db } from './apolloServer';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import { IRequest } from './context';

const app = express();

export interface UserTokenDecoded {
  id: string;
}

app.use(cookieParser());

app.use((req: IRequest, _, next) => {
  const { token }: { token?: string } = req.cookies;
  if (token) {
    const { id } = jwt.verify(
      token,
      process.env.JWT_SECRET
    ) as UserTokenDecoded;
    req.userId = id;
  }
  next();
});

app.use(async (req: IRequest, _, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) {
    return next();
  }
  const user = await db.user({ id: req.userId });
  req.user = user;
  next();
});

server.applyMiddleware({ app });

export { app as default };
