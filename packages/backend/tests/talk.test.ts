import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';

describe('News Resolvers', () => {
  const aggregateMock = jest.fn(() => ({
    count: 1,
  }));

  prisma.talksConnection = jest.fn(() => ({
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
    ],
    aggregate: aggregateMock,
  }));

  const speakerMock = jest.fn(() => ({
    id: 'cjpzpf76a002809748lk0c4vm',
    name: 'Harshit Pant',
  }));

  prisma.talk = jest.fn(() => ({
    speaker: speakerMock,
  }));

  test('newsConnection pagination', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
    {
      talkConnection(orderBy:createdAt_DESC) {
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
            speaker{
              id
              name
            }
          }
          cursor
        }
        aggregate {
          count
        }
      }
    }
  `);
    expect(prisma.talksConnection).toHaveBeenCalledWith({
      orderBy: 'createdAt_DESC',
    });
    expect(aggregateMock).toHaveBeenCalled();
    expect(prisma.talk).toHaveBeenCalledWith({
      id: 'cjq0qx0v800050981rha92aq1',
    });
    expect(speakerMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });
});
