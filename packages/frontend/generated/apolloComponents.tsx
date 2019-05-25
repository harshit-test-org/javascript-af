export type Maybe<T> = T | null;

export interface NewsWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  slug?: Maybe<string>;

  slug_not?: Maybe<string>;

  slug_in?: Maybe<string[]>;

  slug_not_in?: Maybe<string[]>;

  slug_lt?: Maybe<string>;

  slug_lte?: Maybe<string>;

  slug_gt?: Maybe<string>;

  slug_gte?: Maybe<string>;

  slug_contains?: Maybe<string>;

  slug_not_contains?: Maybe<string>;

  slug_starts_with?: Maybe<string>;

  slug_not_starts_with?: Maybe<string>;

  slug_ends_with?: Maybe<string>;

  slug_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  content?: Maybe<string>;

  content_not?: Maybe<string>;

  content_in?: Maybe<string[]>;

  content_not_in?: Maybe<string[]>;

  content_lt?: Maybe<string>;

  content_lte?: Maybe<string>;

  content_gt?: Maybe<string>;

  content_gte?: Maybe<string>;

  content_contains?: Maybe<string>;

  content_not_contains?: Maybe<string>;

  content_starts_with?: Maybe<string>;

  content_not_starts_with?: Maybe<string>;

  content_ends_with?: Maybe<string>;

  content_not_ends_with?: Maybe<string>;

  previewImage?: Maybe<string>;

  previewImage_not?: Maybe<string>;

  previewImage_in?: Maybe<string[]>;

  previewImage_not_in?: Maybe<string[]>;

  previewImage_lt?: Maybe<string>;

  previewImage_lte?: Maybe<string>;

  previewImage_gt?: Maybe<string>;

  previewImage_gte?: Maybe<string>;

  previewImage_contains?: Maybe<string>;

  previewImage_not_contains?: Maybe<string>;

  previewImage_starts_with?: Maybe<string>;

  previewImage_not_starts_with?: Maybe<string>;

  previewImage_ends_with?: Maybe<string>;

  previewImage_not_ends_with?: Maybe<string>;

  isFeatured?: Maybe<boolean>;

  isFeatured_not?: Maybe<boolean>;

  writer?: Maybe<UserWhereInput>;

  tags_every?: Maybe<TagWhereInput>;

  tags_some?: Maybe<TagWhereInput>;

  tags_none?: Maybe<TagWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<NewsWhereInput[]>;

  OR?: Maybe<NewsWhereInput[]>;

  NOT?: Maybe<NewsWhereInput[]>;
}

export interface UserWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  username?: Maybe<string>;

  username_not?: Maybe<string>;

  username_in?: Maybe<string[]>;

  username_not_in?: Maybe<string[]>;

  username_lt?: Maybe<string>;

  username_lte?: Maybe<string>;

  username_gt?: Maybe<string>;

  username_gte?: Maybe<string>;

  username_contains?: Maybe<string>;

  username_not_contains?: Maybe<string>;

  username_starts_with?: Maybe<string>;

  username_not_starts_with?: Maybe<string>;

  username_ends_with?: Maybe<string>;

  username_not_ends_with?: Maybe<string>;

  email?: Maybe<string>;

  email_not?: Maybe<string>;

  email_in?: Maybe<string[]>;

  email_not_in?: Maybe<string[]>;

  email_lt?: Maybe<string>;

  email_lte?: Maybe<string>;

  email_gt?: Maybe<string>;

  email_gte?: Maybe<string>;

  email_contains?: Maybe<string>;

  email_not_contains?: Maybe<string>;

  email_starts_with?: Maybe<string>;

  email_not_starts_with?: Maybe<string>;

  email_ends_with?: Maybe<string>;

  email_not_ends_with?: Maybe<string>;

  newsItems_every?: Maybe<NewsWhereInput>;

  newsItems_some?: Maybe<NewsWhereInput>;

  newsItems_none?: Maybe<NewsWhereInput>;

  talks_every?: Maybe<TalkWhereInput>;

  talks_some?: Maybe<TalkWhereInput>;

  talks_none?: Maybe<TalkWhereInput>;

  githubToken?: Maybe<string>;

  githubToken_not?: Maybe<string>;

  githubToken_in?: Maybe<string[]>;

  githubToken_not_in?: Maybe<string[]>;

  githubToken_lt?: Maybe<string>;

  githubToken_lte?: Maybe<string>;

  githubToken_gt?: Maybe<string>;

  githubToken_gte?: Maybe<string>;

  githubToken_contains?: Maybe<string>;

  githubToken_not_contains?: Maybe<string>;

  githubToken_starts_with?: Maybe<string>;

  githubToken_not_starts_with?: Maybe<string>;

  githubToken_ends_with?: Maybe<string>;

  githubToken_not_ends_with?: Maybe<string>;

  profilePic?: Maybe<string>;

  profilePic_not?: Maybe<string>;

  profilePic_in?: Maybe<string[]>;

  profilePic_not_in?: Maybe<string[]>;

  profilePic_lt?: Maybe<string>;

  profilePic_lte?: Maybe<string>;

  profilePic_gt?: Maybe<string>;

  profilePic_gte?: Maybe<string>;

  profilePic_contains?: Maybe<string>;

  profilePic_not_contains?: Maybe<string>;

  profilePic_starts_with?: Maybe<string>;

  profilePic_not_starts_with?: Maybe<string>;

  profilePic_ends_with?: Maybe<string>;

  profilePic_not_ends_with?: Maybe<string>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<UserWhereInput[]>;

  OR?: Maybe<UserWhereInput[]>;

  NOT?: Maybe<UserWhereInput[]>;
}

export interface TalkWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  slug?: Maybe<string>;

  slug_not?: Maybe<string>;

  slug_in?: Maybe<string[]>;

  slug_not_in?: Maybe<string[]>;

  slug_lt?: Maybe<string>;

  slug_lte?: Maybe<string>;

  slug_gt?: Maybe<string>;

  slug_gte?: Maybe<string>;

  slug_contains?: Maybe<string>;

  slug_not_contains?: Maybe<string>;

  slug_starts_with?: Maybe<string>;

  slug_not_starts_with?: Maybe<string>;

  slug_ends_with?: Maybe<string>;

  slug_not_ends_with?: Maybe<string>;

  title?: Maybe<string>;

  title_not?: Maybe<string>;

  title_in?: Maybe<string[]>;

  title_not_in?: Maybe<string[]>;

  title_lt?: Maybe<string>;

  title_lte?: Maybe<string>;

  title_gt?: Maybe<string>;

  title_gte?: Maybe<string>;

  title_contains?: Maybe<string>;

  title_not_contains?: Maybe<string>;

  title_starts_with?: Maybe<string>;

  title_not_starts_with?: Maybe<string>;

  title_ends_with?: Maybe<string>;

  title_not_ends_with?: Maybe<string>;

  previewImage?: Maybe<string>;

  previewImage_not?: Maybe<string>;

  previewImage_in?: Maybe<string[]>;

  previewImage_not_in?: Maybe<string[]>;

  previewImage_lt?: Maybe<string>;

  previewImage_lte?: Maybe<string>;

  previewImage_gt?: Maybe<string>;

  previewImage_gte?: Maybe<string>;

  previewImage_contains?: Maybe<string>;

  previewImage_not_contains?: Maybe<string>;

  previewImage_starts_with?: Maybe<string>;

  previewImage_not_starts_with?: Maybe<string>;

  previewImage_ends_with?: Maybe<string>;

  previewImage_not_ends_with?: Maybe<string>;

  alt?: Maybe<string>;

  alt_not?: Maybe<string>;

  alt_in?: Maybe<string[]>;

  alt_not_in?: Maybe<string[]>;

  alt_lt?: Maybe<string>;

  alt_lte?: Maybe<string>;

  alt_gt?: Maybe<string>;

  alt_gte?: Maybe<string>;

  alt_contains?: Maybe<string>;

  alt_not_contains?: Maybe<string>;

  alt_starts_with?: Maybe<string>;

  alt_not_starts_with?: Maybe<string>;

  alt_ends_with?: Maybe<string>;

  alt_not_ends_with?: Maybe<string>;

  isFeatured?: Maybe<boolean>;

  isFeatured_not?: Maybe<boolean>;

  speaker?: Maybe<UserWhereInput>;

  length?: Maybe<number>;

  length_not?: Maybe<number>;

  length_in?: Maybe<number[]>;

  length_not_in?: Maybe<number[]>;

  length_lt?: Maybe<number>;

  length_lte?: Maybe<number>;

  length_gt?: Maybe<number>;

  length_gte?: Maybe<number>;

  tags_every?: Maybe<TagWhereInput>;

  tags_some?: Maybe<TagWhereInput>;

  tags_none?: Maybe<TagWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<TalkWhereInput[]>;

  OR?: Maybe<TalkWhereInput[]>;

  NOT?: Maybe<TalkWhereInput[]>;
}

export interface TagWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  name?: Maybe<string>;

  name_not?: Maybe<string>;

  name_in?: Maybe<string[]>;

  name_not_in?: Maybe<string[]>;

  name_lt?: Maybe<string>;

  name_lte?: Maybe<string>;

  name_gt?: Maybe<string>;

  name_gte?: Maybe<string>;

  name_contains?: Maybe<string>;

  name_not_contains?: Maybe<string>;

  name_starts_with?: Maybe<string>;

  name_not_starts_with?: Maybe<string>;

  name_ends_with?: Maybe<string>;

  name_not_ends_with?: Maybe<string>;

  talks_every?: Maybe<TalkWhereInput>;

  talks_some?: Maybe<TalkWhereInput>;

  talks_none?: Maybe<TalkWhereInput>;

  newsItems_every?: Maybe<NewsWhereInput>;

  newsItems_some?: Maybe<NewsWhereInput>;

  newsItems_none?: Maybe<NewsWhereInput>;

  repos_every?: Maybe<RepoWhereInput>;

  repos_some?: Maybe<RepoWhereInput>;

  repos_none?: Maybe<RepoWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<TagWhereInput[]>;

  OR?: Maybe<TagWhereInput[]>;

  NOT?: Maybe<TagWhereInput[]>;
}

export interface RepoWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  slug?: Maybe<string>;

  slug_not?: Maybe<string>;

  slug_in?: Maybe<string[]>;

  slug_not_in?: Maybe<string[]>;

  slug_lt?: Maybe<string>;

  slug_lte?: Maybe<string>;

  slug_gt?: Maybe<string>;

  slug_gte?: Maybe<string>;

  slug_contains?: Maybe<string>;

  slug_not_contains?: Maybe<string>;

  slug_starts_with?: Maybe<string>;

  slug_not_starts_with?: Maybe<string>;

  slug_ends_with?: Maybe<string>;

  slug_not_ends_with?: Maybe<string>;

  githubName?: Maybe<string>;

  githubName_not?: Maybe<string>;

  githubName_in?: Maybe<string[]>;

  githubName_not_in?: Maybe<string[]>;

  githubName_lt?: Maybe<string>;

  githubName_lte?: Maybe<string>;

  githubName_gt?: Maybe<string>;

  githubName_gte?: Maybe<string>;

  githubName_contains?: Maybe<string>;

  githubName_not_contains?: Maybe<string>;

  githubName_starts_with?: Maybe<string>;

  githubName_not_starts_with?: Maybe<string>;

  githubName_ends_with?: Maybe<string>;

  githubName_not_ends_with?: Maybe<string>;

  githubOwner?: Maybe<string>;

  githubOwner_not?: Maybe<string>;

  githubOwner_in?: Maybe<string[]>;

  githubOwner_not_in?: Maybe<string[]>;

  githubOwner_lt?: Maybe<string>;

  githubOwner_lte?: Maybe<string>;

  githubOwner_gt?: Maybe<string>;

  githubOwner_gte?: Maybe<string>;

  githubOwner_contains?: Maybe<string>;

  githubOwner_not_contains?: Maybe<string>;

  githubOwner_starts_with?: Maybe<string>;

  githubOwner_not_starts_with?: Maybe<string>;

  githubOwner_ends_with?: Maybe<string>;

  githubOwner_not_ends_with?: Maybe<string>;

  githubUrl?: Maybe<string>;

  githubUrl_not?: Maybe<string>;

  githubUrl_in?: Maybe<string[]>;

  githubUrl_not_in?: Maybe<string[]>;

  githubUrl_lt?: Maybe<string>;

  githubUrl_lte?: Maybe<string>;

  githubUrl_gt?: Maybe<string>;

  githubUrl_gte?: Maybe<string>;

  githubUrl_contains?: Maybe<string>;

  githubUrl_not_contains?: Maybe<string>;

  githubUrl_starts_with?: Maybe<string>;

  githubUrl_not_starts_with?: Maybe<string>;

  githubUrl_ends_with?: Maybe<string>;

  githubUrl_not_ends_with?: Maybe<string>;

  ownerUsername?: Maybe<string>;

  ownerUsername_not?: Maybe<string>;

  ownerUsername_in?: Maybe<string[]>;

  ownerUsername_not_in?: Maybe<string[]>;

  ownerUsername_lt?: Maybe<string>;

  ownerUsername_lte?: Maybe<string>;

  ownerUsername_gt?: Maybe<string>;

  ownerUsername_gte?: Maybe<string>;

  ownerUsername_contains?: Maybe<string>;

  ownerUsername_not_contains?: Maybe<string>;

  ownerUsername_starts_with?: Maybe<string>;

  ownerUsername_not_starts_with?: Maybe<string>;

  ownerUsername_ends_with?: Maybe<string>;

  ownerUsername_not_ends_with?: Maybe<string>;

  isFeatured?: Maybe<boolean>;

  isFeatured_not?: Maybe<boolean>;

  description?: Maybe<string>;

  description_not?: Maybe<string>;

  description_in?: Maybe<string[]>;

  description_not_in?: Maybe<string[]>;

  description_lt?: Maybe<string>;

  description_lte?: Maybe<string>;

  description_gt?: Maybe<string>;

  description_gte?: Maybe<string>;

  description_contains?: Maybe<string>;

  description_not_contains?: Maybe<string>;

  description_starts_with?: Maybe<string>;

  description_not_starts_with?: Maybe<string>;

  description_ends_with?: Maybe<string>;

  description_not_ends_with?: Maybe<string>;

  owner?: Maybe<UserWhereInput>;

  tags_every?: Maybe<TagWhereInput>;

  tags_some?: Maybe<TagWhereInput>;

  tags_none?: Maybe<TagWhereInput>;

  upvotes_every?: Maybe<UpvoteWhereInput>;

  upvotes_some?: Maybe<UpvoteWhereInput>;

  upvotes_none?: Maybe<UpvoteWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<RepoWhereInput[]>;

  OR?: Maybe<RepoWhereInput[]>;

  NOT?: Maybe<RepoWhereInput[]>;
}

export interface UpvoteWhereInput {
  id?: Maybe<string>;

  id_not?: Maybe<string>;

  id_in?: Maybe<string[]>;

  id_not_in?: Maybe<string[]>;

  id_lt?: Maybe<string>;

  id_lte?: Maybe<string>;

  id_gt?: Maybe<string>;

  id_gte?: Maybe<string>;

  id_contains?: Maybe<string>;

  id_not_contains?: Maybe<string>;

  id_starts_with?: Maybe<string>;

  id_not_starts_with?: Maybe<string>;

  id_ends_with?: Maybe<string>;

  id_not_ends_with?: Maybe<string>;

  user?: Maybe<UserWhereInput>;

  repo?: Maybe<RepoWhereInput>;

  createdAt?: Maybe<DateTime>;

  createdAt_not?: Maybe<DateTime>;

  createdAt_in?: Maybe<DateTime[]>;

  createdAt_not_in?: Maybe<DateTime[]>;

  createdAt_lt?: Maybe<DateTime>;

  createdAt_lte?: Maybe<DateTime>;

  createdAt_gt?: Maybe<DateTime>;

  createdAt_gte?: Maybe<DateTime>;

  updatedAt?: Maybe<DateTime>;

  updatedAt_not?: Maybe<DateTime>;

  updatedAt_in?: Maybe<DateTime[]>;

  updatedAt_not_in?: Maybe<DateTime[]>;

  updatedAt_lt?: Maybe<DateTime>;

  updatedAt_lte?: Maybe<DateTime>;

  updatedAt_gt?: Maybe<DateTime>;

  updatedAt_gte?: Maybe<DateTime>;

  AND?: Maybe<UpvoteWhereInput[]>;

  OR?: Maybe<UpvoteWhereInput[]>;

  NOT?: Maybe<UpvoteWhereInput[]>;
}

export enum NewsOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  ContentAsc = 'content_ASC',
  ContentDesc = 'content_DESC',
  PreviewImageAsc = 'previewImage_ASC',
  PreviewImageDesc = 'previewImage_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum TalkOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  TitleAsc = 'title_ASC',
  TitleDesc = 'title_DESC',
  PreviewImageAsc = 'previewImage_ASC',
  PreviewImageDesc = 'previewImage_DESC',
  AltAsc = 'alt_ASC',
  AltDesc = 'alt_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  LengthAsc = 'length_ASC',
  LengthDesc = 'length_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum TagOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  NameAsc = 'name_ASC',
  NameDesc = 'name_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum RepoOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  SlugAsc = 'slug_ASC',
  SlugDesc = 'slug_DESC',
  GithubNameAsc = 'githubName_ASC',
  GithubNameDesc = 'githubName_DESC',
  GithubOwnerAsc = 'githubOwner_ASC',
  GithubOwnerDesc = 'githubOwner_DESC',
  GithubUrlAsc = 'githubUrl_ASC',
  GithubUrlDesc = 'githubUrl_DESC',
  OwnerUsernameAsc = 'ownerUsername_ASC',
  OwnerUsernameDesc = 'ownerUsername_DESC',
  IsFeaturedAsc = 'isFeatured_ASC',
  IsFeaturedDesc = 'isFeatured_DESC',
  DescriptionAsc = 'description_ASC',
  DescriptionDesc = 'description_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export enum UpvoteOrderByInput {
  IdAsc = 'id_ASC',
  IdDesc = 'id_DESC',
  CreatedAtAsc = 'createdAt_ASC',
  CreatedAtDesc = 'createdAt_DESC',
  UpdatedAtAsc = 'updatedAt_ASC',
  UpdatedAtDesc = 'updatedAt_DESC',
}

export type DateTime = any;

// ====================================================
// Documents
// ====================================================

export type TalkAggregateQueryVariables = {};

export type TalkAggregateQueryQuery = {
  __typename?: 'Query';

  talkConnection: TalkAggregateQueryTalkConnection;
};

export type TalkAggregateQueryTalkConnection = {
  __typename?: 'TalkConnection';

  aggregate: TalkAggregateQueryAggregate;
};

export type TalkAggregateQueryAggregate = {
  __typename?: 'AggregateTalk';

  count: number;
};

import gql from 'graphql-tag';
import * as React from 'react';
import * as ReactApollo from 'react-apollo';
import * as ReactApolloHooks from 'react-apollo-hooks';

// ====================================================
// Components
// ====================================================

export const TalkAggregateQueryDocument = gql`
  query talkAggregateQuery {
    talkConnection {
      aggregate {
        count
      }
    }
  }
`;
export class TalkAggregateQueryComponent extends React.Component<
  Partial<
    ReactApollo.QueryProps<TalkAggregateQueryQuery, TalkAggregateQueryVariables>
  >
> {
  render() {
    return (
      <ReactApollo.Query<TalkAggregateQueryQuery, TalkAggregateQueryVariables>
        query={TalkAggregateQueryDocument}
        {...(this as any)['props'] as any}
      />
    );
  }
}
export type TalkAggregateQueryProps<TChildProps = any> = Partial<
  ReactApollo.DataProps<TalkAggregateQueryQuery, TalkAggregateQueryVariables>
> &
  TChildProps;
export function TalkAggregateQueryHOC<TProps, TChildProps = any>(
  operationOptions:
    | ReactApollo.OperationOption<
        TProps,
        TalkAggregateQueryQuery,
        TalkAggregateQueryVariables,
        TalkAggregateQueryProps<TChildProps>
      >
    | undefined
) {
  return ReactApollo.graphql<
    TProps,
    TalkAggregateQueryQuery,
    TalkAggregateQueryVariables,
    TalkAggregateQueryProps<TChildProps>
  >(TalkAggregateQueryDocument, operationOptions);
}
export function useTalkAggregateQuery(
  baseOptions?: ReactApolloHooks.QueryHookOptions<TalkAggregateQueryVariables>
) {
  return ReactApolloHooks.useQuery<
    TalkAggregateQueryQuery,
    TalkAggregateQueryVariables
  >(TalkAggregateQueryDocument, baseOptions);
}
