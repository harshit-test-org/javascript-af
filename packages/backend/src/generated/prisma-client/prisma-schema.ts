export const typeDefs = /* GraphQL */ `type AggregateNews {
  count: Int!
}

type AggregateRepo {
  count: Int!
}

type AggregateTag {
  count: Int!
}

type AggregateTalk {
  count: Int!
}

type AggregateUpvote {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createNews(data: NewsCreateInput!): News!
  updateNews(data: NewsUpdateInput!, where: NewsWhereUniqueInput!): News
  updateManyNewses(data: NewsUpdateManyMutationInput!, where: NewsWhereInput): BatchPayload!
  upsertNews(where: NewsWhereUniqueInput!, create: NewsCreateInput!, update: NewsUpdateInput!): News!
  deleteNews(where: NewsWhereUniqueInput!): News
  deleteManyNewses(where: NewsWhereInput): BatchPayload!
  createRepo(data: RepoCreateInput!): Repo!
  updateRepo(data: RepoUpdateInput!, where: RepoWhereUniqueInput!): Repo
  updateManyRepoes(data: RepoUpdateManyMutationInput!, where: RepoWhereInput): BatchPayload!
  upsertRepo(where: RepoWhereUniqueInput!, create: RepoCreateInput!, update: RepoUpdateInput!): Repo!
  deleteRepo(where: RepoWhereUniqueInput!): Repo
  deleteManyRepoes(where: RepoWhereInput): BatchPayload!
  createTag(data: TagCreateInput!): Tag!
  updateTag(data: TagUpdateInput!, where: TagWhereUniqueInput!): Tag
  updateManyTags(data: TagUpdateManyMutationInput!, where: TagWhereInput): BatchPayload!
  upsertTag(where: TagWhereUniqueInput!, create: TagCreateInput!, update: TagUpdateInput!): Tag!
  deleteTag(where: TagWhereUniqueInput!): Tag
  deleteManyTags(where: TagWhereInput): BatchPayload!
  createTalk(data: TalkCreateInput!): Talk!
  updateTalk(data: TalkUpdateInput!, where: TalkWhereUniqueInput!): Talk
  updateManyTalks(data: TalkUpdateManyMutationInput!, where: TalkWhereInput): BatchPayload!
  upsertTalk(where: TalkWhereUniqueInput!, create: TalkCreateInput!, update: TalkUpdateInput!): Talk!
  deleteTalk(where: TalkWhereUniqueInput!): Talk
  deleteManyTalks(where: TalkWhereInput): BatchPayload!
  createUpvote(data: UpvoteCreateInput!): Upvote!
  updateUpvote(data: UpvoteUpdateInput!, where: UpvoteWhereUniqueInput!): Upvote
  upsertUpvote(where: UpvoteWhereUniqueInput!, create: UpvoteCreateInput!, update: UpvoteUpdateInput!): Upvote!
  deleteUpvote(where: UpvoteWhereUniqueInput!): Upvote
  deleteManyUpvotes(where: UpvoteWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

type News {
  id: ID!
  slug: String!
  title: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  writer: User!
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type NewsConnection {
  pageInfo: PageInfo!
  edges: [NewsEdge]!
  aggregate: AggregateNews!
}

input NewsCreateInput {
  slug: String!
  title: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  writer: UserCreateOneWithoutNewsItemsInput!
  tags: TagCreateManyWithoutNewsItemsInput
}

input NewsCreateManyWithoutTagsInput {
  create: [NewsCreateWithoutTagsInput!]
  connect: [NewsWhereUniqueInput!]
}

input NewsCreateManyWithoutWriterInput {
  create: [NewsCreateWithoutWriterInput!]
  connect: [NewsWhereUniqueInput!]
}

input NewsCreateWithoutTagsInput {
  slug: String!
  title: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  writer: UserCreateOneWithoutNewsItemsInput!
}

input NewsCreateWithoutWriterInput {
  slug: String!
  title: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  tags: TagCreateManyWithoutNewsItemsInput
}

type NewsEdge {
  node: News!
  cursor: String!
}

enum NewsOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  title_ASC
  title_DESC
  content_ASC
  content_DESC
  previewImage_ASC
  previewImage_DESC
  isFeatured_ASC
  isFeatured_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type NewsPreviousValues {
  id: ID!
  slug: String!
  title: String!
  content: String!
  previewImage: String
  isFeatured: Boolean
  createdAt: DateTime!
  updatedAt: DateTime!
}

input NewsScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  previewImage: String
  previewImage_not: String
  previewImage_in: [String!]
  previewImage_not_in: [String!]
  previewImage_lt: String
  previewImage_lte: String
  previewImage_gt: String
  previewImage_gte: String
  previewImage_contains: String
  previewImage_not_contains: String
  previewImage_starts_with: String
  previewImage_not_starts_with: String
  previewImage_ends_with: String
  previewImage_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [NewsScalarWhereInput!]
  OR: [NewsScalarWhereInput!]
  NOT: [NewsScalarWhereInput!]
}

type NewsSubscriptionPayload {
  mutation: MutationType!
  node: News
  updatedFields: [String!]
  previousValues: NewsPreviousValues
}

input NewsSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: NewsWhereInput
  AND: [NewsSubscriptionWhereInput!]
  OR: [NewsSubscriptionWhereInput!]
  NOT: [NewsSubscriptionWhereInput!]
}

input NewsUpdateInput {
  slug: String
  title: String
  content: String
  previewImage: String
  isFeatured: Boolean
  writer: UserUpdateOneRequiredWithoutNewsItemsInput
  tags: TagUpdateManyWithoutNewsItemsInput
}

input NewsUpdateManyDataInput {
  slug: String
  title: String
  content: String
  previewImage: String
  isFeatured: Boolean
}

input NewsUpdateManyMutationInput {
  slug: String
  title: String
  content: String
  previewImage: String
  isFeatured: Boolean
}

input NewsUpdateManyWithoutTagsInput {
  create: [NewsCreateWithoutTagsInput!]
  delete: [NewsWhereUniqueInput!]
  connect: [NewsWhereUniqueInput!]
  disconnect: [NewsWhereUniqueInput!]
  update: [NewsUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [NewsUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [NewsScalarWhereInput!]
  updateMany: [NewsUpdateManyWithWhereNestedInput!]
}

input NewsUpdateManyWithoutWriterInput {
  create: [NewsCreateWithoutWriterInput!]
  delete: [NewsWhereUniqueInput!]
  connect: [NewsWhereUniqueInput!]
  disconnect: [NewsWhereUniqueInput!]
  update: [NewsUpdateWithWhereUniqueWithoutWriterInput!]
  upsert: [NewsUpsertWithWhereUniqueWithoutWriterInput!]
  deleteMany: [NewsScalarWhereInput!]
  updateMany: [NewsUpdateManyWithWhereNestedInput!]
}

input NewsUpdateManyWithWhereNestedInput {
  where: NewsScalarWhereInput!
  data: NewsUpdateManyDataInput!
}

input NewsUpdateWithoutTagsDataInput {
  slug: String
  title: String
  content: String
  previewImage: String
  isFeatured: Boolean
  writer: UserUpdateOneRequiredWithoutNewsItemsInput
}

input NewsUpdateWithoutWriterDataInput {
  slug: String
  title: String
  content: String
  previewImage: String
  isFeatured: Boolean
  tags: TagUpdateManyWithoutNewsItemsInput
}

input NewsUpdateWithWhereUniqueWithoutTagsInput {
  where: NewsWhereUniqueInput!
  data: NewsUpdateWithoutTagsDataInput!
}

input NewsUpdateWithWhereUniqueWithoutWriterInput {
  where: NewsWhereUniqueInput!
  data: NewsUpdateWithoutWriterDataInput!
}

input NewsUpsertWithWhereUniqueWithoutTagsInput {
  where: NewsWhereUniqueInput!
  update: NewsUpdateWithoutTagsDataInput!
  create: NewsCreateWithoutTagsInput!
}

input NewsUpsertWithWhereUniqueWithoutWriterInput {
  where: NewsWhereUniqueInput!
  update: NewsUpdateWithoutWriterDataInput!
  create: NewsCreateWithoutWriterInput!
}

input NewsWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  content: String
  content_not: String
  content_in: [String!]
  content_not_in: [String!]
  content_lt: String
  content_lte: String
  content_gt: String
  content_gte: String
  content_contains: String
  content_not_contains: String
  content_starts_with: String
  content_not_starts_with: String
  content_ends_with: String
  content_not_ends_with: String
  previewImage: String
  previewImage_not: String
  previewImage_in: [String!]
  previewImage_not_in: [String!]
  previewImage_lt: String
  previewImage_lte: String
  previewImage_gt: String
  previewImage_gte: String
  previewImage_contains: String
  previewImage_not_contains: String
  previewImage_starts_with: String
  previewImage_not_starts_with: String
  previewImage_ends_with: String
  previewImage_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  writer: UserWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [NewsWhereInput!]
  OR: [NewsWhereInput!]
  NOT: [NewsWhereInput!]
}

input NewsWhereUniqueInput {
  id: ID
  slug: String
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  news(where: NewsWhereUniqueInput!): News
  newses(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [News]!
  newsesConnection(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): NewsConnection!
  repo(where: RepoWhereUniqueInput!): Repo
  repoes(where: RepoWhereInput, orderBy: RepoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repo]!
  repoesConnection(where: RepoWhereInput, orderBy: RepoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RepoConnection!
  tag(where: TagWhereUniqueInput!): Tag
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag]!
  tagsConnection(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TagConnection!
  talk(where: TalkWhereUniqueInput!): Talk
  talks(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Talk]!
  talksConnection(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): TalkConnection!
  upvote(where: UpvoteWhereUniqueInput!): Upvote
  upvotes(where: UpvoteWhereInput, orderBy: UpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Upvote]!
  upvotesConnection(where: UpvoteWhereInput, orderBy: UpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UpvoteConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type Repo {
  id: ID!
  slug: String!
  githubName: String!
  githubOwner: String!
  githubUrl: String!
  ownerUsername: String!
  isFeatured: Boolean
  description: String
  owner: User
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  upvotes(where: UpvoteWhereInput, orderBy: UpvoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Upvote!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type RepoConnection {
  pageInfo: PageInfo!
  edges: [RepoEdge]!
  aggregate: AggregateRepo!
}

input RepoCreateInput {
  slug: String!
  githubName: String!
  githubOwner: String!
  githubUrl: String!
  ownerUsername: String!
  isFeatured: Boolean
  description: String
  owner: UserCreateOneInput
  tags: TagCreateManyWithoutReposInput
  upvotes: UpvoteCreateManyWithoutRepoInput
}

input RepoCreateManyWithoutTagsInput {
  create: [RepoCreateWithoutTagsInput!]
  connect: [RepoWhereUniqueInput!]
}

input RepoCreateOneWithoutUpvotesInput {
  create: RepoCreateWithoutUpvotesInput
  connect: RepoWhereUniqueInput
}

input RepoCreateWithoutTagsInput {
  slug: String!
  githubName: String!
  githubOwner: String!
  githubUrl: String!
  ownerUsername: String!
  isFeatured: Boolean
  description: String
  owner: UserCreateOneInput
  upvotes: UpvoteCreateManyWithoutRepoInput
}

input RepoCreateWithoutUpvotesInput {
  slug: String!
  githubName: String!
  githubOwner: String!
  githubUrl: String!
  ownerUsername: String!
  isFeatured: Boolean
  description: String
  owner: UserCreateOneInput
  tags: TagCreateManyWithoutReposInput
}

type RepoEdge {
  node: Repo!
  cursor: String!
}

enum RepoOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  githubName_ASC
  githubName_DESC
  githubOwner_ASC
  githubOwner_DESC
  githubUrl_ASC
  githubUrl_DESC
  ownerUsername_ASC
  ownerUsername_DESC
  isFeatured_ASC
  isFeatured_DESC
  description_ASC
  description_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RepoPreviousValues {
  id: ID!
  slug: String!
  githubName: String!
  githubOwner: String!
  githubUrl: String!
  ownerUsername: String!
  isFeatured: Boolean
  description: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

input RepoScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  githubName: String
  githubName_not: String
  githubName_in: [String!]
  githubName_not_in: [String!]
  githubName_lt: String
  githubName_lte: String
  githubName_gt: String
  githubName_gte: String
  githubName_contains: String
  githubName_not_contains: String
  githubName_starts_with: String
  githubName_not_starts_with: String
  githubName_ends_with: String
  githubName_not_ends_with: String
  githubOwner: String
  githubOwner_not: String
  githubOwner_in: [String!]
  githubOwner_not_in: [String!]
  githubOwner_lt: String
  githubOwner_lte: String
  githubOwner_gt: String
  githubOwner_gte: String
  githubOwner_contains: String
  githubOwner_not_contains: String
  githubOwner_starts_with: String
  githubOwner_not_starts_with: String
  githubOwner_ends_with: String
  githubOwner_not_ends_with: String
  githubUrl: String
  githubUrl_not: String
  githubUrl_in: [String!]
  githubUrl_not_in: [String!]
  githubUrl_lt: String
  githubUrl_lte: String
  githubUrl_gt: String
  githubUrl_gte: String
  githubUrl_contains: String
  githubUrl_not_contains: String
  githubUrl_starts_with: String
  githubUrl_not_starts_with: String
  githubUrl_ends_with: String
  githubUrl_not_ends_with: String
  ownerUsername: String
  ownerUsername_not: String
  ownerUsername_in: [String!]
  ownerUsername_not_in: [String!]
  ownerUsername_lt: String
  ownerUsername_lte: String
  ownerUsername_gt: String
  ownerUsername_gte: String
  ownerUsername_contains: String
  ownerUsername_not_contains: String
  ownerUsername_starts_with: String
  ownerUsername_not_starts_with: String
  ownerUsername_ends_with: String
  ownerUsername_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RepoScalarWhereInput!]
  OR: [RepoScalarWhereInput!]
  NOT: [RepoScalarWhereInput!]
}

type RepoSubscriptionPayload {
  mutation: MutationType!
  node: Repo
  updatedFields: [String!]
  previousValues: RepoPreviousValues
}

input RepoSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RepoWhereInput
  AND: [RepoSubscriptionWhereInput!]
  OR: [RepoSubscriptionWhereInput!]
  NOT: [RepoSubscriptionWhereInput!]
}

input RepoUpdateInput {
  slug: String
  githubName: String
  githubOwner: String
  githubUrl: String
  ownerUsername: String
  isFeatured: Boolean
  description: String
  owner: UserUpdateOneInput
  tags: TagUpdateManyWithoutReposInput
  upvotes: UpvoteUpdateManyWithoutRepoInput
}

input RepoUpdateManyDataInput {
  slug: String
  githubName: String
  githubOwner: String
  githubUrl: String
  ownerUsername: String
  isFeatured: Boolean
  description: String
}

input RepoUpdateManyMutationInput {
  slug: String
  githubName: String
  githubOwner: String
  githubUrl: String
  ownerUsername: String
  isFeatured: Boolean
  description: String
}

input RepoUpdateManyWithoutTagsInput {
  create: [RepoCreateWithoutTagsInput!]
  delete: [RepoWhereUniqueInput!]
  connect: [RepoWhereUniqueInput!]
  disconnect: [RepoWhereUniqueInput!]
  update: [RepoUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [RepoUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [RepoScalarWhereInput!]
  updateMany: [RepoUpdateManyWithWhereNestedInput!]
}

input RepoUpdateManyWithWhereNestedInput {
  where: RepoScalarWhereInput!
  data: RepoUpdateManyDataInput!
}

input RepoUpdateOneRequiredWithoutUpvotesInput {
  create: RepoCreateWithoutUpvotesInput
  update: RepoUpdateWithoutUpvotesDataInput
  upsert: RepoUpsertWithoutUpvotesInput
  connect: RepoWhereUniqueInput
}

input RepoUpdateWithoutTagsDataInput {
  slug: String
  githubName: String
  githubOwner: String
  githubUrl: String
  ownerUsername: String
  isFeatured: Boolean
  description: String
  owner: UserUpdateOneInput
  upvotes: UpvoteUpdateManyWithoutRepoInput
}

input RepoUpdateWithoutUpvotesDataInput {
  slug: String
  githubName: String
  githubOwner: String
  githubUrl: String
  ownerUsername: String
  isFeatured: Boolean
  description: String
  owner: UserUpdateOneInput
  tags: TagUpdateManyWithoutReposInput
}

input RepoUpdateWithWhereUniqueWithoutTagsInput {
  where: RepoWhereUniqueInput!
  data: RepoUpdateWithoutTagsDataInput!
}

input RepoUpsertWithoutUpvotesInput {
  update: RepoUpdateWithoutUpvotesDataInput!
  create: RepoCreateWithoutUpvotesInput!
}

input RepoUpsertWithWhereUniqueWithoutTagsInput {
  where: RepoWhereUniqueInput!
  update: RepoUpdateWithoutTagsDataInput!
  create: RepoCreateWithoutTagsInput!
}

input RepoWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  githubName: String
  githubName_not: String
  githubName_in: [String!]
  githubName_not_in: [String!]
  githubName_lt: String
  githubName_lte: String
  githubName_gt: String
  githubName_gte: String
  githubName_contains: String
  githubName_not_contains: String
  githubName_starts_with: String
  githubName_not_starts_with: String
  githubName_ends_with: String
  githubName_not_ends_with: String
  githubOwner: String
  githubOwner_not: String
  githubOwner_in: [String!]
  githubOwner_not_in: [String!]
  githubOwner_lt: String
  githubOwner_lte: String
  githubOwner_gt: String
  githubOwner_gte: String
  githubOwner_contains: String
  githubOwner_not_contains: String
  githubOwner_starts_with: String
  githubOwner_not_starts_with: String
  githubOwner_ends_with: String
  githubOwner_not_ends_with: String
  githubUrl: String
  githubUrl_not: String
  githubUrl_in: [String!]
  githubUrl_not_in: [String!]
  githubUrl_lt: String
  githubUrl_lte: String
  githubUrl_gt: String
  githubUrl_gte: String
  githubUrl_contains: String
  githubUrl_not_contains: String
  githubUrl_starts_with: String
  githubUrl_not_starts_with: String
  githubUrl_ends_with: String
  githubUrl_not_ends_with: String
  ownerUsername: String
  ownerUsername_not: String
  ownerUsername_in: [String!]
  ownerUsername_not_in: [String!]
  ownerUsername_lt: String
  ownerUsername_lte: String
  ownerUsername_gt: String
  ownerUsername_gte: String
  ownerUsername_contains: String
  ownerUsername_not_contains: String
  ownerUsername_starts_with: String
  ownerUsername_not_starts_with: String
  ownerUsername_ends_with: String
  ownerUsername_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  owner: UserWhereInput
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  upvotes_every: UpvoteWhereInput
  upvotes_some: UpvoteWhereInput
  upvotes_none: UpvoteWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [RepoWhereInput!]
  OR: [RepoWhereInput!]
  NOT: [RepoWhereInput!]
}

input RepoWhereUniqueInput {
  id: ID
  slug: String
}

type Subscription {
  news(where: NewsSubscriptionWhereInput): NewsSubscriptionPayload
  repo(where: RepoSubscriptionWhereInput): RepoSubscriptionPayload
  tag(where: TagSubscriptionWhereInput): TagSubscriptionPayload
  talk(where: TalkSubscriptionWhereInput): TalkSubscriptionPayload
  upvote(where: UpvoteSubscriptionWhereInput): UpvoteSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type Tag {
  id: ID!
  name: String!
  talks(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Talk!]
  newsItems(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [News!]
  repos(where: RepoWhereInput, orderBy: RepoOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Repo!]
}

type TagConnection {
  pageInfo: PageInfo!
  edges: [TagEdge]!
  aggregate: AggregateTag!
}

input TagCreateInput {
  name: String!
  talks: TalkCreateManyWithoutTagsInput
  newsItems: NewsCreateManyWithoutTagsInput
  repos: RepoCreateManyWithoutTagsInput
}

input TagCreateManyWithoutNewsItemsInput {
  create: [TagCreateWithoutNewsItemsInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateManyWithoutReposInput {
  create: [TagCreateWithoutReposInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateManyWithoutTalksInput {
  create: [TagCreateWithoutTalksInput!]
  connect: [TagWhereUniqueInput!]
}

input TagCreateWithoutNewsItemsInput {
  name: String!
  talks: TalkCreateManyWithoutTagsInput
  repos: RepoCreateManyWithoutTagsInput
}

input TagCreateWithoutReposInput {
  name: String!
  talks: TalkCreateManyWithoutTagsInput
  newsItems: NewsCreateManyWithoutTagsInput
}

input TagCreateWithoutTalksInput {
  name: String!
  newsItems: NewsCreateManyWithoutTagsInput
  repos: RepoCreateManyWithoutTagsInput
}

type TagEdge {
  node: Tag!
  cursor: String!
}

enum TagOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TagPreviousValues {
  id: ID!
  name: String!
}

input TagScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [TagScalarWhereInput!]
  OR: [TagScalarWhereInput!]
  NOT: [TagScalarWhereInput!]
}

type TagSubscriptionPayload {
  mutation: MutationType!
  node: Tag
  updatedFields: [String!]
  previousValues: TagPreviousValues
}

input TagSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TagWhereInput
  AND: [TagSubscriptionWhereInput!]
  OR: [TagSubscriptionWhereInput!]
  NOT: [TagSubscriptionWhereInput!]
}

input TagUpdateInput {
  name: String
  talks: TalkUpdateManyWithoutTagsInput
  newsItems: NewsUpdateManyWithoutTagsInput
  repos: RepoUpdateManyWithoutTagsInput
}

input TagUpdateManyDataInput {
  name: String
}

input TagUpdateManyMutationInput {
  name: String
}

input TagUpdateManyWithoutNewsItemsInput {
  create: [TagCreateWithoutNewsItemsInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutNewsItemsInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutNewsItemsInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithoutReposInput {
  create: [TagCreateWithoutReposInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutReposInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutReposInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithoutTalksInput {
  create: [TagCreateWithoutTalksInput!]
  delete: [TagWhereUniqueInput!]
  connect: [TagWhereUniqueInput!]
  disconnect: [TagWhereUniqueInput!]
  update: [TagUpdateWithWhereUniqueWithoutTalksInput!]
  upsert: [TagUpsertWithWhereUniqueWithoutTalksInput!]
  deleteMany: [TagScalarWhereInput!]
  updateMany: [TagUpdateManyWithWhereNestedInput!]
}

input TagUpdateManyWithWhereNestedInput {
  where: TagScalarWhereInput!
  data: TagUpdateManyDataInput!
}

input TagUpdateWithoutNewsItemsDataInput {
  name: String
  talks: TalkUpdateManyWithoutTagsInput
  repos: RepoUpdateManyWithoutTagsInput
}

input TagUpdateWithoutReposDataInput {
  name: String
  talks: TalkUpdateManyWithoutTagsInput
  newsItems: NewsUpdateManyWithoutTagsInput
}

input TagUpdateWithoutTalksDataInput {
  name: String
  newsItems: NewsUpdateManyWithoutTagsInput
  repos: RepoUpdateManyWithoutTagsInput
}

input TagUpdateWithWhereUniqueWithoutNewsItemsInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutNewsItemsDataInput!
}

input TagUpdateWithWhereUniqueWithoutReposInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutReposDataInput!
}

input TagUpdateWithWhereUniqueWithoutTalksInput {
  where: TagWhereUniqueInput!
  data: TagUpdateWithoutTalksDataInput!
}

input TagUpsertWithWhereUniqueWithoutNewsItemsInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutNewsItemsDataInput!
  create: TagCreateWithoutNewsItemsInput!
}

input TagUpsertWithWhereUniqueWithoutReposInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutReposDataInput!
  create: TagCreateWithoutReposInput!
}

input TagUpsertWithWhereUniqueWithoutTalksInput {
  where: TagWhereUniqueInput!
  update: TagUpdateWithoutTalksDataInput!
  create: TagCreateWithoutTalksInput!
}

input TagWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  talks_every: TalkWhereInput
  talks_some: TalkWhereInput
  talks_none: TalkWhereInput
  newsItems_every: NewsWhereInput
  newsItems_some: NewsWhereInput
  newsItems_none: NewsWhereInput
  repos_every: RepoWhereInput
  repos_some: RepoWhereInput
  repos_none: RepoWhereInput
  AND: [TagWhereInput!]
  OR: [TagWhereInput!]
  NOT: [TagWhereInput!]
}

input TagWhereUniqueInput {
  id: ID
  name: String
}

type Talk {
  id: ID!
  slug: String!
  title: String!
  previewImage: String!
  isFeatured: Boolean
  speaker: User
  length: Int
  tags(where: TagWhereInput, orderBy: TagOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Tag!]
  createdAt: DateTime!
  updatedAt: DateTime!
}

type TalkConnection {
  pageInfo: PageInfo!
  edges: [TalkEdge]!
  aggregate: AggregateTalk!
}

input TalkCreateInput {
  slug: String!
  title: String!
  previewImage: String!
  isFeatured: Boolean
  speaker: UserCreateOneWithoutTalksInput
  length: Int
  tags: TagCreateManyWithoutTalksInput
}

input TalkCreateManyWithoutSpeakerInput {
  create: [TalkCreateWithoutSpeakerInput!]
  connect: [TalkWhereUniqueInput!]
}

input TalkCreateManyWithoutTagsInput {
  create: [TalkCreateWithoutTagsInput!]
  connect: [TalkWhereUniqueInput!]
}

input TalkCreateWithoutSpeakerInput {
  slug: String!
  title: String!
  previewImage: String!
  isFeatured: Boolean
  length: Int
  tags: TagCreateManyWithoutTalksInput
}

input TalkCreateWithoutTagsInput {
  slug: String!
  title: String!
  previewImage: String!
  isFeatured: Boolean
  speaker: UserCreateOneWithoutTalksInput
  length: Int
}

type TalkEdge {
  node: Talk!
  cursor: String!
}

enum TalkOrderByInput {
  id_ASC
  id_DESC
  slug_ASC
  slug_DESC
  title_ASC
  title_DESC
  previewImage_ASC
  previewImage_DESC
  isFeatured_ASC
  isFeatured_DESC
  length_ASC
  length_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type TalkPreviousValues {
  id: ID!
  slug: String!
  title: String!
  previewImage: String!
  isFeatured: Boolean
  length: Int
  createdAt: DateTime!
  updatedAt: DateTime!
}

input TalkScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  previewImage: String
  previewImage_not: String
  previewImage_in: [String!]
  previewImage_not_in: [String!]
  previewImage_lt: String
  previewImage_lte: String
  previewImage_gt: String
  previewImage_gte: String
  previewImage_contains: String
  previewImage_not_contains: String
  previewImage_starts_with: String
  previewImage_not_starts_with: String
  previewImage_ends_with: String
  previewImage_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  length: Int
  length_not: Int
  length_in: [Int!]
  length_not_in: [Int!]
  length_lt: Int
  length_lte: Int
  length_gt: Int
  length_gte: Int
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TalkScalarWhereInput!]
  OR: [TalkScalarWhereInput!]
  NOT: [TalkScalarWhereInput!]
}

type TalkSubscriptionPayload {
  mutation: MutationType!
  node: Talk
  updatedFields: [String!]
  previousValues: TalkPreviousValues
}

input TalkSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: TalkWhereInput
  AND: [TalkSubscriptionWhereInput!]
  OR: [TalkSubscriptionWhereInput!]
  NOT: [TalkSubscriptionWhereInput!]
}

input TalkUpdateInput {
  slug: String
  title: String
  previewImage: String
  isFeatured: Boolean
  speaker: UserUpdateOneWithoutTalksInput
  length: Int
  tags: TagUpdateManyWithoutTalksInput
}

input TalkUpdateManyDataInput {
  slug: String
  title: String
  previewImage: String
  isFeatured: Boolean
  length: Int
}

input TalkUpdateManyMutationInput {
  slug: String
  title: String
  previewImage: String
  isFeatured: Boolean
  length: Int
}

input TalkUpdateManyWithoutSpeakerInput {
  create: [TalkCreateWithoutSpeakerInput!]
  delete: [TalkWhereUniqueInput!]
  connect: [TalkWhereUniqueInput!]
  disconnect: [TalkWhereUniqueInput!]
  update: [TalkUpdateWithWhereUniqueWithoutSpeakerInput!]
  upsert: [TalkUpsertWithWhereUniqueWithoutSpeakerInput!]
  deleteMany: [TalkScalarWhereInput!]
  updateMany: [TalkUpdateManyWithWhereNestedInput!]
}

input TalkUpdateManyWithoutTagsInput {
  create: [TalkCreateWithoutTagsInput!]
  delete: [TalkWhereUniqueInput!]
  connect: [TalkWhereUniqueInput!]
  disconnect: [TalkWhereUniqueInput!]
  update: [TalkUpdateWithWhereUniqueWithoutTagsInput!]
  upsert: [TalkUpsertWithWhereUniqueWithoutTagsInput!]
  deleteMany: [TalkScalarWhereInput!]
  updateMany: [TalkUpdateManyWithWhereNestedInput!]
}

input TalkUpdateManyWithWhereNestedInput {
  where: TalkScalarWhereInput!
  data: TalkUpdateManyDataInput!
}

input TalkUpdateWithoutSpeakerDataInput {
  slug: String
  title: String
  previewImage: String
  isFeatured: Boolean
  length: Int
  tags: TagUpdateManyWithoutTalksInput
}

input TalkUpdateWithoutTagsDataInput {
  slug: String
  title: String
  previewImage: String
  isFeatured: Boolean
  speaker: UserUpdateOneWithoutTalksInput
  length: Int
}

input TalkUpdateWithWhereUniqueWithoutSpeakerInput {
  where: TalkWhereUniqueInput!
  data: TalkUpdateWithoutSpeakerDataInput!
}

input TalkUpdateWithWhereUniqueWithoutTagsInput {
  where: TalkWhereUniqueInput!
  data: TalkUpdateWithoutTagsDataInput!
}

input TalkUpsertWithWhereUniqueWithoutSpeakerInput {
  where: TalkWhereUniqueInput!
  update: TalkUpdateWithoutSpeakerDataInput!
  create: TalkCreateWithoutSpeakerInput!
}

input TalkUpsertWithWhereUniqueWithoutTagsInput {
  where: TalkWhereUniqueInput!
  update: TalkUpdateWithoutTagsDataInput!
  create: TalkCreateWithoutTagsInput!
}

input TalkWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  slug: String
  slug_not: String
  slug_in: [String!]
  slug_not_in: [String!]
  slug_lt: String
  slug_lte: String
  slug_gt: String
  slug_gte: String
  slug_contains: String
  slug_not_contains: String
  slug_starts_with: String
  slug_not_starts_with: String
  slug_ends_with: String
  slug_not_ends_with: String
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  previewImage: String
  previewImage_not: String
  previewImage_in: [String!]
  previewImage_not_in: [String!]
  previewImage_lt: String
  previewImage_lte: String
  previewImage_gt: String
  previewImage_gte: String
  previewImage_contains: String
  previewImage_not_contains: String
  previewImage_starts_with: String
  previewImage_not_starts_with: String
  previewImage_ends_with: String
  previewImage_not_ends_with: String
  isFeatured: Boolean
  isFeatured_not: Boolean
  speaker: UserWhereInput
  length: Int
  length_not: Int
  length_in: [Int!]
  length_not_in: [Int!]
  length_lt: Int
  length_lte: Int
  length_gt: Int
  length_gte: Int
  tags_every: TagWhereInput
  tags_some: TagWhereInput
  tags_none: TagWhereInput
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [TalkWhereInput!]
  OR: [TalkWhereInput!]
  NOT: [TalkWhereInput!]
}

input TalkWhereUniqueInput {
  id: ID
  slug: String
}

type Upvote {
  id: ID!
  user: User!
  repo: Repo!
}

type UpvoteConnection {
  pageInfo: PageInfo!
  edges: [UpvoteEdge]!
  aggregate: AggregateUpvote!
}

input UpvoteCreateInput {
  user: UserCreateOneInput!
  repo: RepoCreateOneWithoutUpvotesInput!
}

input UpvoteCreateManyWithoutRepoInput {
  create: [UpvoteCreateWithoutRepoInput!]
  connect: [UpvoteWhereUniqueInput!]
}

input UpvoteCreateWithoutRepoInput {
  user: UserCreateOneInput!
}

type UpvoteEdge {
  node: Upvote!
  cursor: String!
}

enum UpvoteOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UpvotePreviousValues {
  id: ID!
}

input UpvoteScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  AND: [UpvoteScalarWhereInput!]
  OR: [UpvoteScalarWhereInput!]
  NOT: [UpvoteScalarWhereInput!]
}

type UpvoteSubscriptionPayload {
  mutation: MutationType!
  node: Upvote
  updatedFields: [String!]
  previousValues: UpvotePreviousValues
}

input UpvoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UpvoteWhereInput
  AND: [UpvoteSubscriptionWhereInput!]
  OR: [UpvoteSubscriptionWhereInput!]
  NOT: [UpvoteSubscriptionWhereInput!]
}

input UpvoteUpdateInput {
  user: UserUpdateOneRequiredInput
  repo: RepoUpdateOneRequiredWithoutUpvotesInput
}

input UpvoteUpdateManyWithoutRepoInput {
  create: [UpvoteCreateWithoutRepoInput!]
  delete: [UpvoteWhereUniqueInput!]
  connect: [UpvoteWhereUniqueInput!]
  disconnect: [UpvoteWhereUniqueInput!]
  update: [UpvoteUpdateWithWhereUniqueWithoutRepoInput!]
  upsert: [UpvoteUpsertWithWhereUniqueWithoutRepoInput!]
  deleteMany: [UpvoteScalarWhereInput!]
}

input UpvoteUpdateWithoutRepoDataInput {
  user: UserUpdateOneRequiredInput
}

input UpvoteUpdateWithWhereUniqueWithoutRepoInput {
  where: UpvoteWhereUniqueInput!
  data: UpvoteUpdateWithoutRepoDataInput!
}

input UpvoteUpsertWithWhereUniqueWithoutRepoInput {
  where: UpvoteWhereUniqueInput!
  update: UpvoteUpdateWithoutRepoDataInput!
  create: UpvoteCreateWithoutRepoInput!
}

input UpvoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  user: UserWhereInput
  repo: RepoWhereInput
  AND: [UpvoteWhereInput!]
  OR: [UpvoteWhereInput!]
  NOT: [UpvoteWhereInput!]
}

input UpvoteWhereUniqueInput {
  id: ID
}

type User {
  id: ID!
  name: String!
  username: String!
  email: String
  newsItems(where: NewsWhereInput, orderBy: NewsOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [News!]
  talks(where: TalkWhereInput, orderBy: TalkOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Talk!]
  githubToken: String!
  profilePic: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  name: String!
  username: String!
  email: String
  newsItems: NewsCreateManyWithoutWriterInput
  talks: TalkCreateManyWithoutSpeakerInput
  githubToken: String!
  profilePic: String
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutNewsItemsInput {
  create: UserCreateWithoutNewsItemsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutTalksInput {
  create: UserCreateWithoutTalksInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutNewsItemsInput {
  name: String!
  username: String!
  email: String
  talks: TalkCreateManyWithoutSpeakerInput
  githubToken: String!
  profilePic: String
}

input UserCreateWithoutTalksInput {
  name: String!
  username: String!
  email: String
  newsItems: NewsCreateManyWithoutWriterInput
  githubToken: String!
  profilePic: String
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
  username_ASC
  username_DESC
  email_ASC
  email_DESC
  githubToken_ASC
  githubToken_DESC
  profilePic_ASC
  profilePic_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
  username: String!
  email: String
  githubToken: String!
  profilePic: String
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  name: String
  username: String
  email: String
  newsItems: NewsUpdateManyWithoutWriterInput
  talks: TalkUpdateManyWithoutSpeakerInput
  githubToken: String
  profilePic: String
}

input UserUpdateInput {
  name: String
  username: String
  email: String
  newsItems: NewsUpdateManyWithoutWriterInput
  talks: TalkUpdateManyWithoutSpeakerInput
  githubToken: String
  profilePic: String
}

input UserUpdateManyMutationInput {
  name: String
  username: String
  email: String
  githubToken: String
  profilePic: String
}

input UserUpdateOneInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutNewsItemsInput {
  create: UserCreateWithoutNewsItemsInput
  update: UserUpdateWithoutNewsItemsDataInput
  upsert: UserUpsertWithoutNewsItemsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneWithoutTalksInput {
  create: UserCreateWithoutTalksInput
  update: UserUpdateWithoutTalksDataInput
  upsert: UserUpsertWithoutTalksInput
  delete: Boolean
  disconnect: Boolean
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutNewsItemsDataInput {
  name: String
  username: String
  email: String
  talks: TalkUpdateManyWithoutSpeakerInput
  githubToken: String
  profilePic: String
}

input UserUpdateWithoutTalksDataInput {
  name: String
  username: String
  email: String
  newsItems: NewsUpdateManyWithoutWriterInput
  githubToken: String
  profilePic: String
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutNewsItemsInput {
  update: UserUpdateWithoutNewsItemsDataInput!
  create: UserCreateWithoutNewsItemsInput!
}

input UserUpsertWithoutTalksInput {
  update: UserUpdateWithoutTalksDataInput!
  create: UserCreateWithoutTalksInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  username: String
  username_not: String
  username_in: [String!]
  username_not_in: [String!]
  username_lt: String
  username_lte: String
  username_gt: String
  username_gte: String
  username_contains: String
  username_not_contains: String
  username_starts_with: String
  username_not_starts_with: String
  username_ends_with: String
  username_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  newsItems_every: NewsWhereInput
  newsItems_some: NewsWhereInput
  newsItems_none: NewsWhereInput
  talks_every: TalkWhereInput
  talks_some: TalkWhereInput
  talks_none: TalkWhereInput
  githubToken: String
  githubToken_not: String
  githubToken_in: [String!]
  githubToken_not_in: [String!]
  githubToken_lt: String
  githubToken_lte: String
  githubToken_gt: String
  githubToken_gte: String
  githubToken_contains: String
  githubToken_not_contains: String
  githubToken_starts_with: String
  githubToken_not_starts_with: String
  githubToken_ends_with: String
  githubToken_not_ends_with: String
  profilePic: String
  profilePic_not: String
  profilePic_in: [String!]
  profilePic_not_in: [String!]
  profilePic_lt: String
  profilePic_lte: String
  profilePic_gt: String
  profilePic_gte: String
  profilePic_contains: String
  profilePic_not_contains: String
  profilePic_starts_with: String
  profilePic_not_starts_with: String
  profilePic_ends_with: String
  profilePic_not_ends_with: String
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  username: String
  email: String
}
`;
