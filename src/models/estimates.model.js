import { PrismaClient } from '@prisma/client';
import moment from 'moment';
const prisma = new PrismaClient();

export const createOne = async ({ client, total, userId }) =>
  prisma.estimate.create({
    data: {
      client,
      total,
      expires: moment().month(3).toISOString(),
      User: {
        connect: { id: userId },
      },
    },
  });

export const findAll = () => prisma.estimate.findMany() ;

export const findOneById = (id) =>
  prisma.estimate.findUnique({
    where: { id },
  })

export const updateOne = (id, { client, total }) =>
  prisma.estimate.update({
    where: { id },
    data: { client, total },
  });

export const deleteOne = (id) =>
  prisma.estimate.delete({
    where: { id },
  });