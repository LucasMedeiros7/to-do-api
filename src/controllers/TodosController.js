import ToDo from '../models/ToDo.js';
import { dbToDos } from '../database/db.js';

function TodosController(app) {
  //{method: 'GET'}
  app.get('/todos', (req, res) => res.send(dbToDos));

  app.get('/todos/:id', (req, res) => {
    const selectId = dbTodos.find(todo => req.params.id == todo.id);
    res.send(selectId);
  });

  //{method: 'POST'}
  app.post('/todos', (req, res) => {
    const { text, status, userId } = req.body;
    const idTodo = dbToDos.length + 1;
    const todo = new ToDo(idTodo, text, status, userId);

    dbToDos.push(todo);
    res.send('Saved to your todoList');
  });

  //{method: 'DELETE'}
  app.delete('/todos/:id', (req, res) => {
    dbToDos.splice(req.params.id - 1, 1);
    res.send('Deleted ToDo');
  });
}

export default TodosController;
