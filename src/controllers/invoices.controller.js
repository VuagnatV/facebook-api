import * as InvoiceModel from '../models/invoices.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const createOne = async ({ body, user }, response) => {
  const { client, total } = body;
  const invoice = await InvoiceModel.createOne({
    client,
    total,
    userId: user.id,
  });

  response
    .status(201)
    .json({ data: { invoice } });
}

export const findAll = async (request, response) =>
  response
    .status(200)
    .json({
      data: {
        invoices: await InvoiceModel.findAll(),
      },
    });

export const findOne = async ({ params: { id } }, response, next) => {
  const invoice = await InvoiceModel.findOneById(Number(id));
  if (!invoice) {
  return next(new HttpException('Invoice not found', HttpStatus.NOT_FOUND));
  }
  
  response
    .status(200)
    .json({ data: { invoice } });
}

export const updateOne = async ({ params: { id }, body }, response) => {
  const invoice = await InvoiceModel.updateOne(Number(id), body);

  response
    .status(200)
    .json({ data: { invoice } });
}

export const deleteOne = async ({ params : { id }}, response) => {
  await InvoiceModel.deleteOne(Number(id));

  response
    .status(204)
    .end();
}
