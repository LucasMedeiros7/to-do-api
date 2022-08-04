import express from 'express';
import UserController from './controllers/UserController.js';
import ToDoController from './controllers/ToDoController.js';

const app = express();
const port = 3333;

app.use(express.json());

UserController(app);
ToDoController(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
