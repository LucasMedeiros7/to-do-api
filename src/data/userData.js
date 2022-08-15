import { database } from '../infra/database.js';

export default {
  getUsers() {
    return database.query('SELECT * FROM USUARIOS');
  },

  getUsersByID(id) {
    return database.query(`SELECT * FROM USUARIOS WHERE ID = $1`, [id]);
  },
};
