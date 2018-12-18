import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import makeExecutableSchema from './makeExecutableSchema';
import { MyContext } from './context';
import { Prisma } from './generated/prisma-client';

const server = new ApolloServer({
  schema: makeExecutableSchema(),
  context: ({ req, res }: any): MyContext => ({
    req,
    res,
    prisma: new Prisma({
      endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466',
      secret: process.env.PRISMA_SECRET || '',
    }),
  }),
});

const app = express();

server.applyMiddleware({ app });

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log(
    `🚀 Server started at http://localhost:${port}${server.graphqlPath}`
  );
});
