import * as UserModel from '../models/user.model';
import * as ProfileModel from '../models/profile.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const findById = async ({ params: { id } }, response, next) => {
  const user = await UserModel.findById({id});
  if (!user) {
    return next(new HttpException('User not found', HttpStatus.NOT_FOUND));
  }

  response
    .status(200)
    .json({ data: { user } });
}

export const findAll = async (request, response) =>
  response
    .status(200)
    .json({
      data: {
        users: await UserModel.findAll(),
      },
    });

export const updateOne = async ({ params: { id }, body }, response) => {
  const user = await UserModel.updateOne(id, body);

  response
    .status(200)
    .json({ data: { user } });
}

export const deleteOne = async ({ params : { id }}, response) => {
  await UserModel.deleteOne(id);

  response
    .status(204)
    .end();
}

export const findAllPosts = async ({ params : { id }}, response) => 
  response
    .status(200)
    .json({
      posts: await PostModel.findAllPosts(Number(id))
    })

export const getProfile = async ({ params: { id } }, response, next) => {
      const profile = await ProfileModel.getProfile({id});
    
      response
        .status(200)
        .json({ data: { profile } });
    }
  
export const updateProfile = async ({ params: { id }, body }, response) => {
      const profile = await ProfileModel.updateProfile(id, body);
    
      response
        .status(200)
        .json({ data: { profile } });
    }