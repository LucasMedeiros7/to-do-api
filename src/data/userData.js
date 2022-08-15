import { database } from '../infra/database.js';

export default {
  getUsers() {
    return database.query('SELECT * FROM USUARIOS');
  },

  getUsersByID(id) {
    return database.query(`SELECT * FROM USUARIOS WHERE ID = $1`, [id]);
  },

  createUser(user) {
    const { nome, email, senha } = user;

    return database.query(`INSERT INTO USUARIOS ( NOME, EMAIL, SENHA ) VALUES ($1, $2, $3)`,
      [nome, email, senha]);
  }
};
