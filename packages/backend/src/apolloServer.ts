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

const graphqlPath = server.graphqlPath;

export { server as default, graphqlPath }
