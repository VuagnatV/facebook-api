import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ content, title, authorId }) =>
  prisma.article.create({
    data: {
      content,
      title,
      Author: {
        connect: { id: authorId },
      },
    },
  });

export const findAll = () => prisma.article.findMany() ;

export const findOneById = (id) =>
  prisma.article.findUnique({
    where: { id },
  })

export const updateOne = (id, { title, content }) =>
  prisma.article.update({
    where: { id },
    data: { title, content },
  });

export const deleteOne = (id) =>
  prisma.article.delete({
    where: { id },
  });
