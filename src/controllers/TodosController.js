const TodosController = app => {
  app.get('/todos', (req, res) => {
    res.send('Rota tarefas');
  });

  app.post('/todos', (req, res) => {
    res.send('Tarefa adicionada ao banco de dados');
  });
}

export default TodosController;
