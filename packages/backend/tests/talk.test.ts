import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';
import { aggregateMock, speakerMock, tagsMock } from './mocks';

describe('Talk Resolvers', () => {
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
      {
        node: {
          id: 'cjq0qx0v800050981rha92qsd',
          title: 'ORM ORM ORM',
        },
        cursor: 'cjq0qx0v800050981rha92qsd',
      },
    ],
    aggregate: aggregateMock,
  }));

  prisma.talk = jest.fn(() => ({
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
  }));

  test('talkConnection pagination', async () => {
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
            length
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

  test('talkBySlug', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
      {
  talkBySlug(slug: "prisma-orm-to-rule-em-all") {
    id
    title
    slug
    previewImage
    length
    isFeatured
    createdAt
    updatedAt
    tags{
      name
    }
    speaker {
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
    expect(prisma.talk).toHaveBeenCalledWith({
      slug: 'prisma-orm-to-rule-em-all',
    });
    expect(speakerMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });
});
