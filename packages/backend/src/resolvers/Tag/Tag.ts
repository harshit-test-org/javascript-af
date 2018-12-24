import { TagResolvers } from '../../generated/graphqlgen';

export const Tag: TagResolvers.Type = {
  ...TagResolvers.defaultResolvers,

  talks: (parent, args, ctx) => {
    return ctx.prisma.tag({ id: parent.id }).talks();
  },
  newsItems: (parent, args, ctx) => {
    return ctx.prisma.tag({ id: parent.id }).newsItems();
  },
  repos: (parent, args, ctx) => {
    return ctx.prisma.tag({ id: parent.id }).repos();
  },
};
