import { graphqlTestCall } from './utils/gqlTestClient';
import { prisma } from './utils/createPrismaMock';
import { userMock, tagsMock, aggregateMock } from './mocks';

describe('News Resolvers', () => {
  test('Get News By Slug', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
      {
        newsItemBySlug(slug: "some-thing") {
          id
          title
          slug
          content
          previewImage
          isFeatured
          tags {
            name
          }
          writer {
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
    expect(userMock).toHaveBeenCalled();
    expect(tagsMock).toHaveBeenCalled();
    expect(response).toMatchSnapshot();
  });

  test('newsConnection pagination', async () => {
    const response = await graphqlTestCall(/* GraphQL */ `
      {
        newsConnection(orderBy: createdAt_DESC) {
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
