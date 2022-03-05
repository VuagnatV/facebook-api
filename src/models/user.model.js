import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const findByCredentials = ({ email, password }) =>
  prisma.user.findFirst({
    where: {
      email,
      password,
    },
  });

export const findByEmail = ({ email }) =>
  prisma.user.findFirst({
    where: {
      email,
    },
  });

export const findById = ({ id }) =>
  prisma.user.findUnique({
    where: { id },
  });

export const findAll = () => prisma.user.findMany() ;

export const updateOne = (id, { email, password }) => {
  prisma.user.update({
    where: { id },
    data: { email, password },
  });
}

export const deleteOne = (id) =>
  prisma.user.delete({
    where: { id },
  });  

export const createOne = async ({ email, password }) =>
  prisma.user.create({
    data: {
      email,
      password,
      Profile: {
        create: {
          firstName: '',
          lastName: ''
        }
      }
    },
  });

export const findAllPosts = ({id}) => 
  prisma.post.findMany ({
      where: {
          authorId : id
      }
  });
