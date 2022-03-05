import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const createOne = async ({ client, total, userId }) =>
  prisma.invoice.create({
    data: {
      client,
      total,
      User: {
        connect: { id: userId },
      },
    },
  });

export const findAll = () => prisma.invoice.findMany() ;

export const findOneById = (id) =>
  prisma.invoice.findUnique({
    where: { id },
  })

export const updateOne = (id, { client, total }) =>
  prisma.invoice.update({
    where: { id },
    data: { client, total },
  });

export const deleteOne = (id) =>
  prisma.invoice.delete({
    where: { id },
  });