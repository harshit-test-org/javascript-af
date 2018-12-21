import { Resolvers } from '../generated/graphqlgen';

import { Query } from './Query';
import { News } from './News';
import { User } from './User';

export const resolvers: Resolvers = {
  Query,
  News,
  User,
};
