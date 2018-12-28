import { MutationResolvers } from '../generated/graphqlgen';

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  toggleRepoVote: async (parent, { repoId }, ctx) => {
    const { id } = ctx.req.user;
    const alreadyUpvoted = await ctx.prisma.upvotes({
      where: {
        user: {
          id,
        },
        repo: {
          id: repoId,
        },
      },
    });

    if (alreadyUpvoted.length > 0) {
      return ctx.prisma.deleteUpvote({ id: alreadyUpvoted[0].id });
    }
    return ctx.prisma.createUpvote({
      user: {
        connect: {
          id,
        },
      },
      repo: {
        connect: {
          id: repoId,
        },
      },
    });
  },
};
