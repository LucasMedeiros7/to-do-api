const Users = app =>
  app.get('/users', (req, res) => {
    res.send([
      { id: 1, name: 'Terry Jeffords' },
      { id: 2, name: 'Amy Santiago' },
      { id: 3, name: 'Jake Peralta' },
    ]);
  });

export default Users;
