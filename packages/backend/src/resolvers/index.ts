import { Resolvers } from '../generated/graphqlgen';

import { Query } from './Query';
import { News } from './News/News';
import { User } from './User/User';
import { NewsConnection } from './News/NewsConnection';
import { AggregateNews } from './News/AggregateNews';
import { NewsEdge } from './News/NewsEdge';
import { PageInfo } from './News/PageInfo';
import { Talk } from './Talk/Talk';
import { AggregateTalk } from './Talk/AggregateTalk';
import { TalkConnection } from './Talk/TalkConnection';
import { TalkEdge } from './Talk/TalkEdge';
import { Repo } from './Repo/Repo';
import { AggregateRepo } from './Repo/AggregateRepo';
import { RepoConnection } from './Repo/RepoConnection';
import { RepoEdge } from './Repo/RepoEdge';
import { Tag } from './Tag/Tag';

export const resolvers: Resolvers = {
  Query,
  News,
  User,
  NewsConnection,
  AggregateNews,
  NewsEdge,
  PageInfo,
  Talk,
  AggregateTalk,
  TalkConnection,
  TalkEdge,
  Repo,
  AggregateRepo,
  RepoConnection,
  RepoEdge,
  Tag,
};
