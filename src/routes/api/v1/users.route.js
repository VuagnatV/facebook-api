import { Router } from 'express';
import * as UserController from '../../../controllers/users.controller';

const api = Router();

api.get('/', UserController.findAll);
api.get('/:id', UserController.findById);
api.put('/:id', UserController.updateOne);
api.delete('/:id', UserController.deleteOne);
api.get('/:id/posts', UserController.findAllPosts);
api.get('/:id/profile', UserController.getProfile);
api.put('/:id/profile', UserController.updateProfile);

export default api;
