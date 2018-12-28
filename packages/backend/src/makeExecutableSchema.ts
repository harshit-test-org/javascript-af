import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'apollo-server-express';
// import { applyMiddleware } from 'graphql-middleware'

import { resolvers } from './resolvers';

const schema = importSchema('./src/schema.graphql');

export default () => {
  return makeExecutableSchema({
    typeDefs: schema,
    resolvers: resolvers as any,
  });
};
