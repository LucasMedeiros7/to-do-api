const UserController = app => {
  app.get('/users', (req, res) => {
    res.send('Rastreamento da aplicação feito com NODEMON');
  });

  app.post('/users', (req, res) => {
    res.send('Usuário cadastrado');
  });
};

export default UserController;
