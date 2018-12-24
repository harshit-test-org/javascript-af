import { UserResolvers } from '../../generated/graphqlgen';

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,

  newsItems: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).newsItems(args);
  },
  talks: (parent, args, ctx) => {
    return ctx.prisma.user({ id: parent.id }).talks(args);
  },
};
