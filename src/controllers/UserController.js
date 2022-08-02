const UserController = app => {
  app.get('/user', (req, res) => {
    res.send('Rastreamento da aplicação feito com NODEMON');
  });

  app.post('/user', (req, res) => {
    console.log(req.body);
    res.send('Usuário cadastrado com sucesso');
  });
}

export default UserController;
