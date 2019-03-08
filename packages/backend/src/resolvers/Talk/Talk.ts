import { TalkResolvers } from '../../generated/graphqlgen';

export const Talk: TalkResolvers.Type = {
  ...TalkResolvers.defaultResolvers,

  speaker: (parent, _args, ctx) => {
    return ctx.prisma.talk({ id: parent.id }).speaker();
  },
  tags: (parent, _args, ctx) => {
    return ctx.prisma.talk({ id: parent.id }).tags();
  },
};
