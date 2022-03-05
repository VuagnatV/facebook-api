import { Router } from 'express';
import * as ArticleController from '../../controllers/articles.controller';

const api = Router();

api.post('/', ArticleController.createOne);
api.get('/', ArticleController.findAll);
api.get('/:id', ArticleController.findOne);
api.put('/:id', ArticleController.updateOne);
api.delete('/:id', ArticleController.deleteOne);

export default api;
