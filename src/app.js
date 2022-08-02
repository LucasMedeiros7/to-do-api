import express from 'express';
import UserController from './controllers/UserController.js';
import TodosController from './controllers/TodosController.js';

const app = express();
const port = 3333;

app.use(express.json());

UserController(app);
TodosController(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
