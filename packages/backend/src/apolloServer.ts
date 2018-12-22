import { ApolloServer } from 'apollo-server-express';
import makeExecutableSchema from './makeExecutableSchema';
import { MyContext } from './context';
import { Prisma } from './generated/prisma-client';

export const db = new Prisma({
  endpoint: process.env.PRISMA_ENDPOINT || 'http://localhost:4466',
  secret: process.env.PRISMA_SECRET || '',
});

const server = new ApolloServer({
  schema: makeExecutableSchema(),
  context: ({ req, res }: any): MyContext => ({
    req,
    res,
    prisma: db,
  }),
});

const graphqlPath = server.graphqlPath;

export { server as default, graphqlPath };
