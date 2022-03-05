import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const getProfile = async ({ id }) =>
  prisma.profile.findUnique({
    where: {
      userId : id
    }
  });

export const updateProfile = (id, { firstName, lastName }) =>
  prisma.profile.update({
    where: {
      userId : id
    },
    data: { firstName, lastName },
  });