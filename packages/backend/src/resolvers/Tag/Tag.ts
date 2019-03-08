import { TagResolvers } from '../../generated/graphqlgen';

export const Tag: TagResolvers.Type = {
  ...TagResolvers.defaultResolvers,

  talks: (parent, _args, ctx) => {
    return ctx.prisma.tag({ id: parent.id }).talks();
  },
  newsItems: (parent, _args, ctx) => {
    return ctx.prisma.tag({ id: parent.id }).newsItems();
  },
  repos: (parent, _args, ctx) => {
    return ctx.prisma.tag({ id: parent.id }).repos();
  },
};
