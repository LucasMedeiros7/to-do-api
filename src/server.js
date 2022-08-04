import express from 'express';
import UserController from './controllers/UserController.js';
import ToDosController from './controllers/ToDosController.js';

const app = express();
const port = 3333;

app.use(express.json());

UserController(app);
ToDosController(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
