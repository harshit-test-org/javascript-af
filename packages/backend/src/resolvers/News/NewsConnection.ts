// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { NewsConnectionResolvers } from '../../generated/graphqlgen';

export const NewsConnection: NewsConnectionResolvers.Type = {
  ...NewsConnectionResolvers.defaultResolvers,
  aggregate: (_, args, ctx) => {
    return ctx.prisma.newsesConnection(args).aggregate();
  },
};
