import { userRouter } from './userRoutes.js';
import { taskRouter } from './taskRoutes.js';

export const routes = app => {
  app.use(userRouter);
  app.use(taskRouter);
};
