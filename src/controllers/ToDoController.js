import ToDo from '../models/ToDo.js';
import { dbToDos } from '../infra/db.js';

function ToDoController(app) {
  app.get('/todos', (req, res) => {
    if (!dbToDos.length) {
      res.send('ToDos Not Found');
      return;
    }
    res.send(dbToDos);
  });

  app.get('/todos/:id', (req, res) => {
    const selectToDo = dbToDos.find(todo => +req.params.id == +todo.id);
    if (!selectToDo) {
      res.send('ToDos Not Found');
      return;
    }

    res.send(selectToDo);
  });

  app.post('/todos', (req, res) => {
    const { text, status, userId } = req.body;
    const idTodo = dbToDos.length + 1;
    const toDo = new ToDo(idTodo, text, status, userId);

    dbToDos.push(toDo);
    res.send('Saved to your todoList');
  });

  app.delete('/todos/:id', (req, res) => {
    dbToDos.splice(req.params.id - 1, 1);
    res.send('Deleted ToDo');
  });
}

export default ToDoController;
