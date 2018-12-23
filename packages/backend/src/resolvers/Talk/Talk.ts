import { TalkResolvers } from '../../generated/graphqlgen';

export const Talk: TalkResolvers.Type = {
  ...TalkResolvers.defaultResolvers,

  speaker: (parent, args, ctx) => {
    return ctx.prisma.talk({ id: parent.id }).speaker();
  },
};
