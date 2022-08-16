import userData from '../data/userData.js';

async function verifyUserExists(req, res, next) {
  const userId = req.params.id;

  try {
    const { rows: user } = await userData.getUsersByID(userId);

    if (!user.length) {
      return res.status(404).send('User not found');
    }
    next();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

async function verifyUserAlreadyExists(req, res, next) {
  const { email } = req.body;

  try {
    const { rows: user } = await userData.getUserByEmail(email);

    if (user.length) {
      return res.status(400).send('User already exists');
    }
    next();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

export { verifyUserExists, verifyUserAlreadyExists };
