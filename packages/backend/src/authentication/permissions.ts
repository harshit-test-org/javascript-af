import { rule, shield } from 'graphql-shield';
import { MyContext } from '../context';

const isAuthenticated = rule()(async (_parent, _args, ctx: MyContext) => {
  return Boolean(ctx.req.user);
});

export const permissions = shield({
  Mutation: {
    toggleRepoVote: isAuthenticated,
  },
});
