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
    const selectId = dbUser.find(user => req.params.id === user.id);

    if (!selectId) {
      res.send('User Not Found');
      return;
    }

    res.send(selectId);
  });

  app.post('/user', (req, res) => {
    const user = new User(req.body.name, req.body.email);

    dbUser.push(user);
    res.send('Saved User');
  });

  app.delete('/user/:id', (req, res) => {
    const user = dbUser.find(user => user.id === req.params.id);
    const index = dbUser.indexOf(user);

    dbUser.splice(index, 1);

    res.send('Deleted user');
  });
}

export default UserController;
