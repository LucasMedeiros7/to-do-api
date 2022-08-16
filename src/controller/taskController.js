import taskData from '../data/taskData.js';

export default {
  async getTasks(_, res) {
    try {
      const { rows: tasks } = await taskData.getTasks();
      res.json(tasks);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async getTaskByID(req, res) {
    const task_id = req.params.id;

    try {
      const { rows: task } = await taskData.getTaskByID(task_id);

      if (!task) {
        res.status(404).send('Task not found');
      }

      res.json(task);
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async createTask(req, res) {
    const task = req.body;

    try {
      await taskData.createTask(task);
      res.status(201).json({ message: 'Task created' });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async updateTask(req, res) {
    const task_id = req.params.id;
    const task = req.body;

    try {
      await taskData.updateTask(task_id, task);
      res.status(200).json({ message: 'Task updated' });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },

  async deleteTask(req, res) {
    const task_id = req.params.id;

    try {
      await taskData.deleteTask(task_id);
      res.status(200).json({ message: 'Task deleted' });
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  },
};
