import { rule, shield } from 'graphql-shield';
import { MyContext } from '../context';

const isAuthenticated = rule()(async (parent, args, ctx: MyContext, info) => {
  return Boolean(ctx.req.user);
});

export const permissions = shield({
  Mutation: {
    toggleRepoVote: isAuthenticated,
  },
});
