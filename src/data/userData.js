import { connection } from '../infra/database.js';

export const userData = {
  getUsers() {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM USUARIOS', (err, results) => {
        if (err) {
          reject(err);
        } else {
          resolve(results);
        }
      });
    });
  },

  getUsersByID(id) {
    return new Promise((resolve, reject) => {
      connection.query(
        'SELECT * FROM USUARIOS WHERE ID = $1',
        [id],
        (err, results) => {
          if (err) {
            reject(err);
          } else {
            resolve(results);
          }
        }
      );
    });
  },
};
