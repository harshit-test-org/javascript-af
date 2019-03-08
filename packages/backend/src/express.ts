import * as cookieParser from 'cookie-parser';
import * as express from 'express';
import * as jwt from 'jsonwebtoken';
import * as passport from 'passport';
import server, { db } from './apolloServer';
import { authInit } from './authentication';
import { IRequest } from './context';

import ms = require('ms');

const app = express();

export interface UserTokenDecoded {
  id: string;
}

app.use(cookieParser());
app.use(passport.initialize());

authInit();

app.use((req: IRequest, _, next) => {
  const { token }: { token?: string } = req.cookies;
  if (token) {
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET!
    ) as UserTokenDecoded;
    req.userId = decoded.id;
  }
  next();
});

/* eslint-disable consistent-return */
app.use(async (req: IRequest, _, next) => {
  // if they aren't logged in, skip this
  if (!req.userId) {
    return next();
  }
  const user = await db.user({ id: req.userId });
  req.user = user;
  next();
});
/* eslint-enable consistent-return */

app.get('/auth/logout', (_req: IRequest, res) => {
  res.clearCookie('token');
  res.redirect('/');
});

app.get(
  '/auth/github',
  passport.authenticate('github', {
    scope: ['read:user,user:email'],
    session: false,
  })
);
app.get(
  '/auth/github/callback',
  passport.authenticate('github', {
    session: false,
    failureRedirect: '/login?msg=failed', // update later on!
  }),
  (req, res) => {
    res.cookie(
      'token',
      jwt.sign({ id: req.user.id }, process.env.JWT_SECRET!, {
        expiresIn: '14d',
      }),
      {
        httpOnly: true,
        maxAge: ms('14d'),
      }
    );
    res.redirect('/');
  }
);

server.applyMiddleware({
  app,
  cors: {
    origin: ['http://localhost:3000'],
    credentials: true,
  },
});

export { app as default };
