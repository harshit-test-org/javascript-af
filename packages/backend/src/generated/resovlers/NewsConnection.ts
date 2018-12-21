// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { NewsConnectionResolvers } from '../graphqlgen';

export const NewsConnection: NewsConnectionResolvers.Type = {
  ...NewsConnectionResolvers.defaultResolvers,

  aggregate: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
