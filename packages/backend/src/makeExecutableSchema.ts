import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';

import { resolvers } from './resolvers';
import { permissions } from './authentication/permissions';

const typeDefs = importSchema('./src/schema.graphql');

export default () => {
  const schema = makeExecutableSchema({
    typeDefs,
    resolvers: resolvers as any,
  });
  return applyMiddleware(schema, permissions);
};
