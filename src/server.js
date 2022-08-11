import express from 'express';
import chalk from 'chalk';
import UsuariosController from './controllers/UsuariosController.js';
import TarefasController from './controllers/TarefasController.js';
import bd from './infra/sqlite-db.js';

const app = express();
const port = 3333;

app.use(express.json());

UsuariosController(app, bd);
TarefasController(app, bd);

app.listen(port, () => {
  console.log(
    `Servidor rodando na em => ${chalk.cyan(`http://localhost:${port}`)}`
  );
});
