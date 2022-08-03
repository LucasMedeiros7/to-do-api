import UserModel from '../models/UserModel.js';
import { dbUser } from '../database/db.js';

function UserController(app) {
  //{method: 'GET'}
  app.get('/user', (req, res) => {
    res.send(dbUser);
  });

  app.get('/user/:id', (req, res) => {
    const selectId = dbUser.find(user => +req.params.id === +user.id);
    res.send(selectId);
  });

  //{method: 'POST'}
  app.post('/user', (req, res) => {
    const { name, email, password } = req.body;
    const userId = dbUser.length + 1;
    const user = new UserModel(userId, name, email, password);

    dbUser.push(user);
    res.send(dbUser);
  });

  //{method: 'DELETE'}
  app.delete('/user/:id', (req, res) => {
    dbUser.splice(req.params.id - 1, 1);
    res.send('Deleted User');
  });
}

export default UserController;
