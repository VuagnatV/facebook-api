import { Router } from 'express';
import AuthenticationRoutes from './authentication.route';
import UserRoutes from './users.route';
import InvoiceRoutes from './invoices.route';
import EstimateRoutes from './estimates.routes';
import PostRoutes from './posts.routes';
import { jwtMiddleware } from '../../../middlewares/jwt.middleware';

const v1 = Router();

v1.use('/authentication', AuthenticationRoutes);
v1.use('/users', jwtMiddleware({ secret: process.env.secret }), UserRoutes); 
v1.use('/invoices', jwtMiddleware({ secret: 'SECRET' }), InvoiceRoutes);
v1.use('/estimates', jwtMiddleware({ secret: 'SECRET' }), EstimateRoutes);
v1.use('/posts', jwtMiddleware({secret: process.env.secret }), PostRoutes)

export default v1;