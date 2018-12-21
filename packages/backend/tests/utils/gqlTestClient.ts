import { graphql } from 'graphql';
import schema from '../../src/makeExecutableSchema';
import { prisma } from './createPrismaMock';

// add context to this when we have authentication in place
export const graphqlTestCall = async (query: any, variables?: any) => {
  return graphql(schema(), query, undefined, { prisma }, variables);
};
