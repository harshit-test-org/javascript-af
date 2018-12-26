import { RepoResolvers } from '../../generated/graphqlgen';

export const Repo: RepoResolvers.Type = {
  ...RepoResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).owner();
  },
  tags: (parent, args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).tags();
  },
  upvotes: (parent, args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).upvotes();
  },
  aggregatedUpvotes: async (parent, args, ctx) => {
    const result = await ctx.prisma
      .upvotesConnection({ where: { repo: { id: parent.id } } })
      .aggregate();
    return result.count;
  },
};
