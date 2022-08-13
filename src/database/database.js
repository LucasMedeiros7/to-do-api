import dotenv from 'dotenv';
dotenv.config();

import pkg from 'pg';

const { Pool } = pkg;

export const connection = new Pool({
  connectionString: process.env.DATABASE_URL,
});
