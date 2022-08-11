import Usuario from '../models/Usuario.js';

export default function UsuariosController(app, bd) {
  app.get('/user', async (req, res) => {
    if (!bd.length) {
      res.send('User Not Found');
      return;
    }
    res.send(bd);
  });

  app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const selectId = bd.find(user => Number(user.id) === Number(id));

    if (!selectId) {
      res.send('User Not Found');
      return;
    }

    res.send(selectId);
  });

  app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    const id = bd.length + 1;
    const user = new Usuario(id, name, email, password);

    bd.push(user);
    res.send('Saved User');
  });

  app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = bd.find(user => Number(user.id) === Number(id));
    const index = bd.indexOf(user);

    bd.splice(index, 1);
    res.send('Deleted user');
  });

  app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = bd.find(user => Number(user.id) === Number(userId));

    if (!user) {
      return res.send('User not found!');
    }
    const { name, email, password } = req.body;
    bd[user.id - 1] = new Usuario(userId, name, email, password);

    res.send('Updated user');
  });
}
