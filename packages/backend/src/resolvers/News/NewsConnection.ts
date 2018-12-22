import { NewsConnectionResolvers } from '../../generated/graphqlgen';

export const NewsConnection: NewsConnectionResolvers.Type = {
  ...NewsConnectionResolvers.defaultResolvers,
  aggregate: (_, args, ctx) => {
    return ctx.prisma.newsesConnection(args).aggregate();
  },
};
