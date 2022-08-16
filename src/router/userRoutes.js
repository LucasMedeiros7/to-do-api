import { Router } from 'express';
import userController from '../controller/userController.js';
import {
  verifyUserAlreadyExists,
  verifyUserExists,
} from '../middleware/verifyUser.js';

const userRouter = Router();

userRouter.get('/users', userController.getUsers);
userRouter.get('/users/:id', verifyUserExists, userController.getUsersByID);
userRouter.post('/users', verifyUserAlreadyExists, userController.createUser);
userRouter.put('/users/:id', verifyUserExists, userController.updateUser);
userRouter.delete('/users/:id', verifyUserExists, userController.deleteUser);

export { userRouter };
