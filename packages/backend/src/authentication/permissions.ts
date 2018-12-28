import { rule, shield } from 'graphql-shield';
import { MyContext } from '../context';

const isAuthenticated = rule()(async (parent, args, ctx: MyContext, info) => {
  return ctx.req.user !== null;
});

export const permissions = shield({});
