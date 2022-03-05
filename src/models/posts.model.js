import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ message, authorId }) =>
  prisma.post.create({
    data: {
      message,
      Author: {
        connect: { id: authorId },
      },
    },
  });

export const findAll = () => prisma.post.findMany() ;

export const findOneById = (id) =>
  prisma.post.findUnique({
    where: { id },
  })

export const updateOne = (id, { message }) =>
  prisma.post.update({
    where: { id },
    data: { message },
  });

export const deleteOne = (id) =>
  prisma.post.delete({
    where: { id },
  });

export const pagination = ({offset, limit}) => {
  const posts = prisma.post.findMany({
    skip: offset,
    take: limit
  })

  return posts
}

export const countPosts = () => prisma.post.count()