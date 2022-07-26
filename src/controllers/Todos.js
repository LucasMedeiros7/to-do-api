const Todos = app =>
  app.get('/todos', (req, res) => {
    res.send([
      {
        id: 1,
        userName: 'Terry Jeffords',
        todos: [{ id: 1, taskName: 'Tarefa 1', complete: false }],
      },
      {
        id: 2,
        userName: 'Amy Santiago',
        todos: [{ id: 2, taskName: 'Tarefa 2', complete: true }],
      },
      {
        id: 3,
        userName: 'Jake Peralta',
        todos: [{ id: 3, taskName: 'Tarefa 3', complete: false }],
      },
    ]);
  });

export default Todos;
