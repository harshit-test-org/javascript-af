import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';
import { aggregateMock, speakerMock } from './mocks';

describe('Talk Resolvers', () => {
  test('talkConnection pagination', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
      {
        talkConnection(orderBy: createdAt_DESC) {
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
              speaker {
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
          tags {
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
