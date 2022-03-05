import * as EstimateModel from '../models/estimates.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const createOne = async ({ body, user }, response) => {
  const { client, total } = body;
  const estimate = await EstimateModel.createOne({
    client,
    total,
    userId: user.id,
  });

  response
    .status(201)
    .json({ data: { estimate } });
}

export const findAll = async (_request, response) =>
  response
    .status(200)
    .json({
      data: {
        estimates: await EstimateModel.findAll(),
      },
    });

export const findOne = async ({ params: { id } }, response, next) => {
  const estimate = await EstimateModel.findOneById(Number(id));
  if (!estimate) {
  return next(new HttpException('Estimate not found', HttpStatus.NOT_FOUND));
  }
  
  response
    .status(200)
    .json({ data: { estimate } });
}

export const updateOne = async ({ params: { id }, body }, response) => {
  const estimate = await EstimateModel.updateOne(Number(id), body);

  response
    .status(200)
    .json({ data: { estimate } });
}

export const deleteOne = async ({ params : { id }}, response) => {
  await EstimateModel.deleteOne(Number(id));

  response
    .status(204)
    .end();
}
