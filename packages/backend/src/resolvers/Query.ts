import { QueryResolvers } from '../generated/graphqlgen';

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,

  newsItemBySlug(_, { slug }, { prisma }) {
    return prisma.news({
      slug,
    });
  },
  newsConnection(_, args, { prisma }) {
    return prisma.newsesConnection(args);
  },

  talkConnection(_, args, { prisma }) {
    return prisma.talksConnection(args);
  },
  talkBySlug(_, { slug }, { prisma }) {
    return prisma.talk({
      slug,
    });
  },

  repoConnection(_, args, { prisma }) {
    return prisma.repoesConnection(args);
  },
  repoBySlug(_, { slug }, { prisma }) {
    return prisma.repo({
      slug,
    });
  },
};
