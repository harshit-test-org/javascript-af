import { RepoConnectionResolvers } from '../../generated/graphqlgen';

export const RepoConnection: RepoConnectionResolvers.Type = {
  ...RepoConnectionResolvers.defaultResolvers,

  aggregate: (parent, args, ctx) => {
    throw new Error('Resolver not implemented');
  },
};
