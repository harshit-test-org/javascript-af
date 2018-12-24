// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { RepoResolvers } from '../graphqlgen';

export const Repo: RepoResolvers.Type = {
  ...RepoResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  tags: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
