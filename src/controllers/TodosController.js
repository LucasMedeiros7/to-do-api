import TodosModel from '../models/TodosModel.js';
import { dbTodos } from '../data/db.js';

function TodosController(app) {
  //{method: 'GET'}
  app.get('/todos', (req, res) => res.send(dbTodos));

  app.get('/todos/:id', (req, res) => {
    const selectId = dbTodos.find(user => req.params.id == user.id);
    res.send(selectId);
  });

  //{method: 'POST'}
  app.post('/todos', (req, res) => {
    const { text, status, userId } = req.body;
    const idTodo = dbTodos.length + 1;
    const todo = new TodosModel(idTodo, text, status, userId);

    dbTodos.push(todo);
    res.send('Saved to your todoList');
  });
}

export default TodosController;
