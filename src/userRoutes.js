import { Router } from 'express';
import userController from './controller/userController.js';

const userRoutes = Router();

userRoutes
  .get('/users', userController.getUsers)
  .get('/users/:id', userController.getUsersByID)
  .post('/users', (req, res) => {
    res.send('Create user');
  })
  .put('/users/:id', (req, res) => {
    res.send('Update user');
  })
  .delete('/users/:id', (req, res) => {
    res.send('Delete user');
  });

export { userRoutes };
