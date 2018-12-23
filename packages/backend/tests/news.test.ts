import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';

describe('News Resolvers', () => {
  const writerMock = jest.fn(() => ({
    id: 'cjpxpmpgr000c097495f1kz8w',
    username: 'pantharshit00',
    email: 'pantharshit00@gmail.com',
    githubToken: 's',
    profilePic: 'ss',
    createdAt: '2018-12-21T07:25:09.804Z',
    updatedAt: '2018-12-21T07:25:09.804Z',
  }));

  prisma.news = jest.fn(() => ({
    id: 'cjpxpvzai000o0974ydxa80da',
    title: 'Some thing',
    slug: 'some-thing',
    content: 'some mdx thing',
    previewImage: 's',
    isFeatured: false,
    createdAt: '2018-12-21T07:32:22.501Z',
    updatedAt: '2018-12-21T07:32:22.501Z',
    writer: writerMock,
  }));

  const aggregateMock = jest.fn(() => ({
    count: 2,
  }));

  prisma.newsesConnection = jest.fn(() => ({
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
  }));

  test('Get News By Slug', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
      {
      newsItemBySlug(slug:"some-thing"){
        id
        title
        slug
        content
        previewImage
        isFeatured
        writer{
          id
          username
          email
          githubToken
          profilePic
          createdAt
          updatedAt
        }
        createdAt
        updatedAt
      }
    }
  `);
    expect(prisma.news).toHaveBeenCalledWith({ slug: 'some-thing' });
    expect(writerMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });

  test('newsConnection pagination', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
    {
      newsConnection(orderBy:createdAt_DESC) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            title
          }
          cursor
        }
        aggregate {
          count
        }
      }
    }
  `);
    expect(prisma.newsesConnection).toHaveBeenCalledWith({
      orderBy: 'createdAt_DESC',
    });
    expect(aggregateMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });
});
