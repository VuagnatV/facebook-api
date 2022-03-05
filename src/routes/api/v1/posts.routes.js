
import { Router } from 'express';
import * as PostController from '../../../controllers/posts.controller';

const api = Router();

api.post('/', PostController.createOne);
api.get('/:id', PostController.findOne);
api.get('/', PostController.pagination);
api.put('/:id', PostController.updateOne);
api.delete('/:id', PostController.deleteOne);

export default api;
