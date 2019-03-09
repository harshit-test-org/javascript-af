import { rule, shield } from 'graphql-shield';
import { IMyContext } from '../context';

const isAuthenticated = rule()(async (_parent, _args, ctx: IMyContext) => {
  return Boolean(ctx.req.user);
});

export const permissions = shield({
  Mutation: {
    toggleRepoVote: isAuthenticated,
  },
});
