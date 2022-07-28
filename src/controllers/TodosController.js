const TodosController = app => {
  app.get('/todos', (req, res) => {
    res.send('Rota "todos" ');
  });
};

export default TodosController;
