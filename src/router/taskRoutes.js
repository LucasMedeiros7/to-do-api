import { Router } from 'express';
import taskController from '../controller/taskController.js';
import { verifyTaskExists } from '../middleware/verifyTask.js';

const taskRouter = Router();

taskRouter.get('/tasks', taskController.getTasks);
taskRouter.get('/tasks/:id', verifyTaskExists, taskController.getTaskByID);
taskRouter.post('/tasks', taskController.createTask);
taskRouter.put('/tasks/:id', verifyTaskExists, taskController.updateTask);
taskRouter.delete('/tasks/:id', verifyTaskExists, taskController.deleteTask);

export { taskRouter };
