import User from '../models/User.js';
import { dbUser } from '../database/db.js';

function UserController(app) {
  app.get('/user', (req, res) => {
    if (!dbUser.length) {
      res.send('User Not Found');
      return;
    }
    res.send(dbUser);
  });

  app.get('/user/:id', (req, res) => {
    const id = req.params.id;
    const selectId = dbUser.find(user => Number(user.id) === Number(id));

    if (!selectId) {
      res.send('User Not Found');
      return;
    }

    res.send(selectId);
  });

  app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    const id = dbUser.length + 1;
    const user = new User(id, name, email, password);

    dbUser.push(user);
    res.send('Saved User');
  });

  app.delete('/user/:id', (req, res) => {
    const id = req.params.id;
    const user = dbUser.find(user => Number(user.id) === Number(id));
    const index = dbUser.indexOf(user);

    dbUser.splice(index, 1);
    res.send('Deleted user');
  });

  app.put('/user/:id', (req, res) => {
    const userId = req.params.id;
    const user = dbUser.find(user => Number(user.id) === Number(userId));

    if (!user) {
      return res.send('User not found!');
    }
    const { name, email, password } = req.body;
    dbUser[user.id - 1] = new User(userId, name, email, password);

    res.send('Updated user');
  });
}

export default UserController;
