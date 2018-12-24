import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';
import { aggregateMock, ownerMock } from './mocks';

describe('Repo Resolvers', () => {
  prisma.repoesConnection = jest.fn(() => ({
    pageInfo: {
      hasNextPage: false,
      hasPreviousPage: false,
      startCursor: 'cjq0qx0v800050981rha92aq2',
      endCursor: 'cjq0qx0v800050981rha92aq2',
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
  }));

  prisma.repo = jest.fn(() => ({
    id: 'cjq0qx0v800050981rha92aq2',
    githubName: 'IhaveWings',
    githubOwner: 'LuciferM',
    slug: 'LuciferM/IhaveWings',
    isFeatured: true,
    createdAt: '2018-12-23T10:24:29.259Z',
    updatedAt: '2018-12-23T10:24:29.259Z',
    owner: ownerMock,
  }));

  test('repoConnection pagination', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
    {
      repoConnection(orderBy:createdAt_DESC) {
        pageInfo {
          hasNextPage
          hasPreviousPage
          startCursor
          endCursor
        }
        edges {
          node {
            id
            githubName
            githubOwner
            owner{
              id
              username
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
    expect(prisma.repoesConnection).toHaveBeenCalledWith({
      orderBy: 'createdAt_DESC',
    });
    expect(aggregateMock).toHaveBeenCalled();
    expect(prisma.repo).toHaveBeenCalledWith({
      id: 'cjq0qx0v800050981rha92aq2',
    });
    expect(ownerMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });

  test('repoBySlug', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
      {
  repoBySlug(slug: "LuciferM/IhaveWings") {
    id
    slug
    githubName
    githubOwner
    isFeatured
    createdAt
    updatedAt
    owner {
      id
      name
      username
      email
      githubToken
      profilePic
      createdAt
      updatedAt
    }
  }
}
  `);
    expect(prisma.repo).toHaveBeenCalledWith({
      slug: 'LuciferM/IhaveWings',
    });
    expect(ownerMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });
});
