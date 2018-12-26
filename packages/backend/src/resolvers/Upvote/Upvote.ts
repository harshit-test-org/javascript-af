import { UpvoteResolvers } from '../../generated/graphqlgen';

export const Upvote: UpvoteResolvers.Type = {
  ...UpvoteResolvers.defaultResolvers,

  user: (parent, args, ctx) => {
    return ctx.prisma.upvote({ id: parent.id }).user();
  },
  repo: (parent, args, ctx) => {
    return ctx.prisma.upvote({ id: parent.id }).repo();
  },
};
