import express from 'express';
import cors from 'cors';
import { userRoutes } from './userRoutes.js';
import dotenv from 'dotenv';

dotenv.config();
console.log('heroku', process.env.NODE_ENV);

const app = express();
const port = process.env.PORT || 3333;

console.log(port);

app.use(cors());
app.use(express.json());

app.use(userRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
