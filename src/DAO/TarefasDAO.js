export default class TarefasDAO {
  static listarTarefas(bd) {
    return new Promise((resolve, reject) => {
      bd.all('SELECT * FROM TAREFAS', (err, rows) => {
        if (err) {
          reject(err);
        }

        resolve(rows);
      });
    });
  }
}
