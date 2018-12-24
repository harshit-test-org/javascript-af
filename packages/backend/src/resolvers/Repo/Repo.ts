import { RepoResolvers } from '../../generated/graphqlgen';

export const Repo: RepoResolvers.Type = {
  ...RepoResolvers.defaultResolvers,

  owner: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
  tags: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
