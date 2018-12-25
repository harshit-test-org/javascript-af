import { RepoConnectionResolvers } from '../../generated/graphqlgen';

export const RepoConnection: RepoConnectionResolvers.Type = {
  ...RepoConnectionResolvers.defaultResolvers,

  aggregate: (parent, args, ctx) => {
    return ctx.prisma.repoesConnection(args).aggregate();
  },
};
