import express from 'express';
import cors from 'cors';
import { routes } from './router/routes.js';

const app = express();
const port = process.env.PORT || 3333;

app.use(cors());
app.use(express.json());

routes(app);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
