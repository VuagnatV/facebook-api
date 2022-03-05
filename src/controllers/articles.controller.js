import * as ArticleModel from '../models/articles.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const createOne = async ({ body, user }, response) => {
  const { title, content } = body;
  const article = await ArticleModel.createOne({
    title,
    content,
    authorId: user.id,
  });

  response
    .status(201)
    .json({ data: { article } });
}

export const findOne = async ({ params: { id } }, response, next) => {
  const article = await ArticleModel.findOneById(Number(id));
  if (!article) {
    return next(new HttpException('Article not found', HttpStatus.NOT_FOUND));
  }

  response
    .status(200)
    .json({ data: { article } });
}

export const findAll = async (request, response) =>
  response
    .status(200)
    .json({
      data: {
        articles: await ArticleModel.findAll(),
      },
    });

export const updateOne = async ({ params: { id }, body }, response) => {
  const article = await ArticleModel.updateOne(Number(id), body);

  response
    .status(200)
    .json({ data: { article } });
}

export const deleteOne = async ({ params : { id }}, response) => {
  await ArticleModel.deleteOne(Number(id));

  response
    .status(204)
    .end();
}
