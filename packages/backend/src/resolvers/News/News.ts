// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { NewsResolvers } from '../../generated/graphqlgen';

export const News: NewsResolvers.Type = {
  ...NewsResolvers.defaultResolvers,

  writer: (parent, args, ctx) => {
    return ctx.prisma.news({ id: parent.id }).writer();
  },
};
