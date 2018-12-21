// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { NewsResolvers } from '../graphqlgen';

export const News: NewsResolvers.Type = {
  ...NewsResolvers.defaultResolvers,

  writer: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
