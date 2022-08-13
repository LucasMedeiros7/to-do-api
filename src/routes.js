import { Router } from 'express';
import UserController from './controller/UserController.js';

const routes = Router();

routes.get('/users', UserController.getUsers);
routes.get('/', UserController.get);

export { routes };
