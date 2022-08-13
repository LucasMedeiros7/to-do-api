import { connection } from '../database/database.js';

export default {
  async get(req, res) {
    res.send('Hello World');
  },

  async getUsers(req, res) {
    try {
      const { rows } = await connection.query('SELECT * FROM "USUARIOS"');

      res.send(rows);
    } catch (error) {
      console.log(error.message);
    }
  },
};
