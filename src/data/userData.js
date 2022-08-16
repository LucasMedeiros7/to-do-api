import { database } from '../infra/database.js';

export default {
  getUsers() {
    return database.query('SELECT * FROM USUARIOS');
  },

  getUsersByID(id) {
    return database.query(`SELECT * FROM USUARIOS WHERE ID = $1`, [id]);
  },

  getUserByEmail(email) {
    return database.query(`SELECT * FROM USUARIOS WHERE EMAIL = $1`, [email]);
  },

  createUser(user) {
    const { nome, email, senha } = user;
    const query = `INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES ($1, $2, $3)`;

    return database.query(query, [nome, email, senha]);
  },

  updateUser(id, user) {
    const { nome, email, senha } = user;
    const query = `UPDATE USUARIOS SET NOME = $1, EMAIL = $2, SENHA = $3 WHERE ID = $4`;

    return database.query(query, [nome, email, senha, id]);
  },

  deleteUser(id) {
    return database.query(`DELETE FROM USUARIOS WHERE ID = $1`, [id]);
  },
};
