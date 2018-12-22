import { TalkResolvers } from '../graphqlgen';

export const Talk: TalkResolvers.Type = {
  ...TalkResolvers.defaultResolvers,

  speaker: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
