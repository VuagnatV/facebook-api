import jwt from 'jsonwebtoken';
import * as UserModel from '../models/user.model';
import { HttpException, HttpStatus } from '../errors/HttpException.error';

export const login = async (request, response) => {
  const user = await UserModel.findByCredentials(request.body);
  if (!user) {
    throw new HttpException('Unauthorized', HttpStatus.UNAUTHORIZED);
  }

  const token = jwt.sign({ id: user.id }, process.env.secret);
  response.json({
    data: {
      user,
      token,
    },
  });
}

export const register = async (request, response) => {
  if(await UserModel.findByEmail(request.body.email)) {
    throw new HttpException('Email already exist', HttpStatus.CONFLICT);
  }

  const user = await UserModel.createOne(request.body);

  response
    .status(201)
    .json({ data: { user } });
}
