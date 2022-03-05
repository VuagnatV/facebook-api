import * as PostModel from '../models/posts.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';
import base64url from "base64url";

export const createOne = async ({ body, user }, response) => {
  const { message } = body;
  const post = await PostModel.createOne({
    message,
    authorId: user.id,
  });

  response
    .status(201)
    .json({ data: { post } });
}

export const findOne = async ({ params: { id } }, response, next) => {
  const post = await PostModel.findOneById(Number(id));
  if (!post) {
    return next(new HttpException('Post not found', HttpStatus.NOT_FOUND));
  }

  response
    .status(200)
    .json({ data: { post } });
}

export const findAll = async (request, response) =>
  response
    .status(200)
    .json({
      data: {
        posts: await PostModel.findAll(),
      },
    });

export const updateOne = async ({ params: { id }, body }, response) => {
  const post = await PostModel.updateOne(Number(id), body);

  response
    .status(200)
    .json({ data: { post } });
}

export const deleteOne = async ({ params : { id }}, response) => {
  await PostModel.deleteOne(Number(id));

  response
    .status(204)
    .end();
}

export const pagination = async (request, response) => {
  const offset = parseInt(request.query.offset || '0');
  const limit = parseInt(request.query.limit || '2');
  const total = await PostModel.countPosts()

  const { API_URL = 'http://localhost:8080/api' } = process.env;

  const previousOffset = (offset <= 0)
    ? 0
    : offset - limit;
  const nextOffset = offset + limit;
  const next = (nextOffset >= total)
    ? null
    : `${API_URL}/v1/posts?offset=${nextOffset}&limit=${limit}`;
  const previous = `${API_URL}/v1/posts?offset=${previousOffset}&limit=${limit}`;

  response
    .status(200)
      .json({
        data: {
          posts: await PostModel.pagination({
            offset: parseInt(offset),
            limit: parseInt(limit),
          }),
        },
        links: {
          next,
          previous,
        },
      });

}