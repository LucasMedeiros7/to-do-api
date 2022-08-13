import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { routes } from './routes.js';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
