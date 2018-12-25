import { RepoResolvers } from '../../generated/graphqlgen';

export const Repo: RepoResolvers.Type = {
  ...RepoResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).owner();
  },
  tags: (parent, args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).tags();
  },
};
