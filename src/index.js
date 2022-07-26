import express from 'express';
import Users from './controllers/Users.js';
import Todos from './controllers/Todos.js';

const app = express();
const port = 3333;

Users(app);
Todos(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
