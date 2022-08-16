import { Router } from 'express';
import userController from '../controller/userController.js';
import {
  verifyUserAlreadyExists,
  verifyUserExists,
} from '../middleware/verifyUser.js';

const router = Router();

router.get('/users', userController.getUsers);
router.get('/users/:id', verifyUserExists, userController.getUsersByID);
router.post('/users', verifyUserAlreadyExists, userController.createUser);
router.put('/users/:id', verifyUserExists, userController.updateUser);
router.delete('/users/:id', verifyUserExists, userController.deleteUser);

export { router };
