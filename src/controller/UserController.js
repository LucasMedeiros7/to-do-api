import { userData } from '../data/userData.js';

export default {
  async getUsers(req, res) {
    try {
      const { rows: users } = await userData.getUsers();

      users.forEach(user => {
        user.senha = undefined;
      });

      res.json(users);
    } catch (e) {
      res.status(400).send(e);
    }
  },

  async getUsersByID(req, res) {
    const id = req.params.id;

    try {
      const { rows: user } = await userData.getUsersByID(id);

      if (!user) {
        res.status(404).send('User not found');
      }

      user[0].senha = undefined;
      res.json(user);
    } catch (e) {
      res.status(400).send(e);
    }
  },
};
