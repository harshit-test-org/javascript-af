import { RepoResolvers } from '../../generated/graphqlgen';

export const Repo: RepoResolvers.Type = {
  ...RepoResolvers.defaultResolvers,

  owner: (parent, _args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).owner();
  },
  tags: (parent, _args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).tags();
  },
  upvotes: (parent, _args, ctx) => {
    return ctx.prisma.repo({ id: parent.id }).upvotes();
  },
  aggregatedUpvotes: async (parent, _args, ctx) => {
    const result = await ctx.prisma
      .upvotesConnection({ where: { repo: { id: parent.id } } })
      .aggregate();
    return result.count;
  },
  userHasVoted: (parent, _args, ctx) => {
    if (!ctx.req.user) {
      return null;
    }
    // all good here
    return ctx.prisma.$exists.upvote({
      user: {
        id: ctx.req.user.id,
      },
      repo: {
        id: parent.id,
      },
    });
  },
};
