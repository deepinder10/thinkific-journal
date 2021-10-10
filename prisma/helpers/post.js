import prisma from '@/lib/prisma';

export const fetchPosts = () => {
  return prisma.post.findMany({
    orderBy: { createdAt: 'desc' },
    include: { author: true },
  });
};

export const createPost = (data) => {
  return prisma.post.create({ data });
};
