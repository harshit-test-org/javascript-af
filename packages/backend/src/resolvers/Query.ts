import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  async newsItemBySlug(_, { slug }, { prisma, req }) {
    const item = await prisma.news({
      slug,
    });

    return item;
  },
  newsConnection(_, args, { prisma }) {
    return prisma.newsesConnection(args);
  },

  talkConnection(_, args, { prisma }) {
    return prisma.talksConnection(args);
  },
};
