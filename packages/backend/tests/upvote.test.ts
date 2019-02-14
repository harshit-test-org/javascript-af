import { graphqlTestCall } from './utils/gqlTestClient';
import { userMock } from './mocks';
import { prisma } from './utils/createPrismaMock';

// authenticated upvote
// unable to upvote when authenticated
// toggleBehaviour

describe('Upvote Resolvers', () => {
  const mutation = /* GraphQL */ `
    mutation {
      toggleRepoVote(repoId: "cjq3kf0yq000v0904cqvmnnuf") {
        id
      }
    }
  `;
  test('it should not upvote when not logged in ', async () => {
    const response = await graphqlTestCall(mutation);
    expect(response.data).toBeFalsy();
    expect(response.errors).toBeDefined();
    expect(response.errors[0].message).toBe('Not Authorised!');
    expect(response).toMatchSnapshot();
  });

  test('should upvote the repo if we are logged in and there is no previous upvotes', async () => {
    prisma.upvotes = jest.fn(() => []);
    const response = await graphqlTestCall(mutation, null, userMock());
    expect(prisma.upvotes).toHaveBeenCalledWith({
      where: {
        user: {
          id: 'cjpxpmpgr000c097495f1kz8w',
        },
        repo: {
          id: 'cjq3kf0yq000v0904cqvmnnuf',
        },
      },
    });
    expect(prisma.createUpvote).toHaveBeenCalledWith({
      user: {
        connect: {
          id: 'cjpxpmpgr000c097495f1kz8w',
        },
      },
      repo: {
        connect: {
          id: 'cjq3kf0yq000v0904cqvmnnuf',
        },
      },
    });
    expect(response).toMatchSnapshot();
  });
  test('should remove existing upvote from user', async () => {
    prisma.upvotes = jest.fn(() => [{ id: 'someid' }]);
    const response = await graphqlTestCall(mutation, null, userMock());
    expect(prisma.upvotes).toHaveBeenCalledWith({
      where: {
        user: {
          id: 'cjpxpmpgr000c097495f1kz8w',
        },
        repo: {
          id: 'cjq3kf0yq000v0904cqvmnnuf',
        },
      },
    });

    expect(prisma.deleteUpvote).toHaveBeenCalledWith({
      id: 'someid',
    });
    expect(response).toMatchSnapshot();
  });
});
