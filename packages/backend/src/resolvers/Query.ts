import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  async newsItemBySlug(_, { slug }, { prisma }) {
    const item = await prisma.news({
      slug,
    });

    return item;
  },
  newConnection(_, args, { prisma }) {
    return prisma.newsesConnection(args);
  },
};
