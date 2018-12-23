import { graphql } from 'graphql';
import schema from '../../src/makeExecutableSchema';
import { prisma } from './createPrismaMock';
import { User } from '../../src/generated/prisma-client';

// add context to this when we have authentication in place
export const graphqlTestCall = async (
  query: any,
  variables?: any,
  user?: User
) => {
  return graphql(
    schema(),
    query,
    undefined,
    {
      prisma,
      req: {
        user,
      },
    },
    variables
  );
};
