import { Router } from 'express';
import * as InvoiceController from '../../../controllers/invoices.controller';

const api = Router();

api.post('/', InvoiceController.createOne);
api.get('/', InvoiceController.findAll);
api.get('/:id', InvoiceController.findOne);
api.put('/:id', InvoiceController.updateOne);
api.delete('/:id', InvoiceController.deleteOne);

export default api;