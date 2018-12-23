// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TalkConnectionResolvers } from '../../generated/graphqlgen';

export const TalkConnection: TalkConnectionResolvers.Type = {
  ...TalkConnectionResolvers.defaultResolvers,

  aggregate: (parent, args, ctx) => {
    return ctx.prisma.talksConnection(args).aggregate();
  },
};
