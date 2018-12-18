import { importSchema } from 'graphql-import';
import { makeExecutableSchema } from 'apollo-server-express';

import Query from './resolvers/Query';

export default () => {
  return makeExecutableSchema({
    typeDefs: importSchema('./src/schema.graphql'),
    resolvers: {
      Query,
    },
  });
};
