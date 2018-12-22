// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { TalkResolvers } from '../graphqlgen';

export const Talk: TalkResolvers.Type = {
  ...TalkResolvers.defaultResolvers,

  speaker: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
