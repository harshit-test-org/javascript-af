import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'apollo-server-express';

import { resolvers } from './resolvers';

export default () => {
  return makeExecutableSchema({
    typeDefs: importSchema('./src/schema.graphql'),
    resolvers: resolvers as any,
  });
};
