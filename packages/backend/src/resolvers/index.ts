import { Resolvers } from '../generated/graphqlgen';

import { Query } from './Query';
import { News } from './News/News';
import { User } from './User/User';
import { NewsConnection } from './News/NewsConnection';
import { AggregateNews } from './News/AggregateNews';
import { NewsEdge } from './News/NewsEdge';
import { PageInfo } from './News/PageInfo';

export const resolvers: Resolvers = {
  Query,
  News,
  User,
  NewsConnection,
  AggregateNews,
  NewsEdge,
  PageInfo,
};
