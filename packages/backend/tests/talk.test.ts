import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';

describe('Talk Resolvers', () => {
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
    username: 'pantharshit00',
    email: 'pantharshit00@gmail.com',
    githubToken: '811c699ef0af73a09ac039fbcf5964da051cb9d9',
    profilePic: 's',
    createdAt: '2018-12-22T16:54:51.920Z',
    updatedAt: '2018-12-23T16:46:23.763Z',
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
