import Tarefa from '../models/Tarefa.js';
import TarefasDAO from '../DAO/TarefasDAO.js';

export default function TarefasController(app, bd) {
  app.get('/tarefas', async (req, res) => {
    try {
      const usuarios = await TarefasDAO.listarTarefas(bd);
      res.json(usuarios);
    } catch (err) {
      res.status(404).json({ erro: err });
    }
  });

  app.get('/todos/:id', (req, res) => {
    const selectToDo = bd.find(todo => +req.params.id == +todo.id);
    if (!selectToDo) {
      res.send('ToDos Not Found');
      return;
    }

    res.send(selectToDo);
  });

  app.post('/todos', (req, res) => {
    const { text, status, userId } = req.body;
    const idTodo = bd.length + 1;
    const toDo = new Tarefa(idTodo, text, status, userId);

    bd.push(toDo);
    res.send('Saved to your todoList');
  });

  app.delete('/todos/:id', (req, res) => {
    bd.splice(req.params.id - 1, 1);
    res.send('Deleted ToDo');
  });
}
