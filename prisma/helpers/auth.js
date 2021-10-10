import prisma from '@/lib/prisma';

export const createUser = (name = 'Anonymous', email) => {
  return prisma.user.create({
    data: { name, email },
  });
};
