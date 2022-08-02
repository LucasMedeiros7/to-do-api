import TodosModel from '../models/TodosModel.js';
import { dbTodos } from '../data/db.js';

const TodosController = app => {
  app.get('/todos', (req, res) => {
    res.send('Rota tarefas');
  });

  app.post('/todos', (req, res) => {
    const { id, text, status, userId } = req.body;
    const todo = new TodosModel(id, text, status, userId);

    dbTodos.push(todo);
    res.send(dbTodos);
  });
}

export default TodosController;
