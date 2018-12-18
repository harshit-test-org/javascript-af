import { IResolvers } from '../generated/types';

const resolvers: IResolvers = {
  Query: {
    hello() {
      return 'world';
    },
  },
};

export default {
  ...resolvers.Query,
};
