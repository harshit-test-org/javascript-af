import { NewsResolvers } from '../../generated/graphqlgen';

export const News: NewsResolvers.Type = {
  ...NewsResolvers.defaultResolvers,

  writer: (parent, args, ctx) => {
    return ctx.prisma.news({ id: parent.id }).writer();
  },
};
