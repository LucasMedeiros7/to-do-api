import { Router } from 'express';
import userController from './controller/userController.js';

const userRoutes = Router();

userRoutes
  .get('/users', userController.getUsers)
  .get('/users/:id', userController.getUsersByID)
  .post('/users', userController.createUser);

export { userRoutes };
