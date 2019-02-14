import {
  tagsMock,
  userMock,
  aggregateMock,
  ownerMock,
  speakerMock,
} from '../mocks';

export const prisma = {
  news: jest.fn(() => ({
    id: 'cjpxpvzai000o0974ydxa80da',
    title: 'Some thing',
    slug: 'some-thing',
    content: 'some mdx thing',
    previewImage: 's',
    isFeatured: false,
    createdAt: '2018-12-21T07:32:22.501Z',
    updatedAt: '2018-12-21T07:32:22.501Z',
    tags: tagsMock,
    writer: userMock,
  })),
  newsesConnection: jest.fn(() => ({
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: 'cjq0nc986000j097434ewrq03',
      endCursor: 'cjq0nczi2000t0974i1bprdza',
    },
    edges: [
      {
        node: {
          id: 'cjq0nc986000j097434ewrq03',
          title: 'This is a news item',
        },
        cursor: 'cjq0nc986000j097434ewrq03',
      },
      {
        node: {
          id: 'cjq0nczi2000t0974i1bprdza',
          title: 'This is a news item second',
        },
        cursor: 'cjq0nczi2000t0974i1bprdza',
      },
    ],
    aggregate: aggregateMock,
  })),
  repoesConnection: jest.fn(() => ({
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: 'cjq0qx0v800050981rha92aq2',
      endCursor: 'cjq0qx0v800050981rha92qsa',
    },
    edges: [
      {
        node: {
          id: 'cjq0qx0v800050981rha92aq2',
          githubName: 'IhaveWings',
          githubOwner: 'LuciferM',
        },
        cursor: 'cjq0qx0v800050981rha92aq2',
      },
      {
        node: {
          id: 'cjq0qx0v800050981rha92qsa',
          githubName: 'WingsAreGone',
          githubOwner: 'Amenadiel',
        },
        cursor: 'cjq0qx0v800050981rha92qsa',
      },
    ],
    aggregate: aggregateMock,
  })),
  repo: jest.fn(() => ({
    id: 'cjq0qx0v800050981rha92aq2',
    githubName: 'IhaveWings',
    githubOwner: 'LuciferM',
    slug: 'LuciferM/IhaveWings',
    isFeatured: true,
    createdAt: '2018-12-23T10:24:29.259Z',
    updatedAt: '2018-12-23T10:24:29.259Z',
    owner: ownerMock,
  })),
  talksConnection: jest.fn(() => ({
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: 'cjq0qx0v800050981rha92aq1',
      endCursor: 'cjq0qx0v800050981rha92aq1',
    },
    edges: [
      {
        node: {
          id: 'cjq0qx0v800050981rha92aq1',
          title: 'Prisma: ORM to rule em all',
        },
        cursor: 'cjq0qx0v800050981rha92aq1',
      },
      {
        node: {
          id: 'cjq0qx0v800050981rha92qsd',
          title: 'ORM ORM ORM',
        },
        cursor: 'cjq0qx0v800050981rha92qsd',
      },
    ],
    aggregate: aggregateMock,
  })),
  talk: jest.fn(() => ({
    id: 'cjq0qx0v800050981rha92aq1',
    title: 'Prisma: ORM to rule em all',
    slug: 'prisma-orm-to-rule-em-all',
    previewImage: 'https://google.com',
    length: 2500,
    isFeatured: true,
    createdAt: '2018-12-23T10:24:29.259Z',
    updatedAt: '2018-12-23T10:24:29.259Z',
    speaker: speakerMock,
    tags: tagsMock,
  })),
  createUpvote: jest.fn(() => ({
    id: 'someid',
  })),
  deleteUpvote: jest.fn(() => ({
    id: 'someid',
  })),
  upvotes: jest.fn(() => [{ id: 'someid' }]),
};
