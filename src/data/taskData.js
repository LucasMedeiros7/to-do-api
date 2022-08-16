import { database } from '../infra/database.js';

export default {
  getTasks() {
    return database.query('SELECT * FROM TAREFAS');
  },

  getTaskByID(id) {
    return database.query(`SELECT * FROM TAREFAS WHERE ID = $1`, [id]);
  },

  createTask(task) {
    const { titulo, descricao, status, datacriacao, id_usuario } = task;

    const query = `INSERT INTO TAREFAS (titulo, descricao, status, datacriacao, id_usuario) VALUES ($1, $2, $3, $4, $5)`;

    return database.query(query, [
      titulo,
      descricao,
      status,
      datacriacao,
      id_usuario,
    ]);
  },

  updateTask(id, task) {
    const { titulo, descricao, status } = task;
    const query = `UPDATE TAREFAS SET titulo = $1, descricao = $2, status = $3 WHERE ID = $4`;

    return database.query(query, [titulo, descricao, status, id]);
  },

  deleteTask(id) {
    return database.query(`DELETE FROM TAREFAS WHERE ID = $1`, [id]);
  },
};
