import taskData from '../data/taskData.js';

export async function verifyTaskExists(req, res, next) {
  const task_id = req.params.id;

  try {
    const { rows: task } = await taskData.getTaskByID(task_id);

    if (!task.length) {
      return res.status(404).send('Task not found');
    }
    next();
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}
