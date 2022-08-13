import { connection } from '../database/database.js';

export default {
  async get(req, res) {
    res.json('Rota funcionando');
  },

  async getUsers(req, res) {
    try {
      const { rows } = await connection.query('SELECT * FROM "USUARIOS"');

      rows.forEach(row => {
        row.SENHA = undefined;
      });

      res.send(rows);
    } catch (error) {
      console.log(error.message);
    }
  },
};
