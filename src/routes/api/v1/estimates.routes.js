import { Router } from 'express';
import * as EstimateController from '../../../controllers/estimates.controller';

const api = Router();

api.post('/', EstimateController.createOne);
api.get('/', EstimateController.findAll);
api.get('/:id', EstimateController.findOne);
api.put('/:id', EstimateController.updateOne);
api.delete('/:id', EstimateController.deleteOne);

export default api;