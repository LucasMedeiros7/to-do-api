import { v4 } from 'uuid';

class User {
  constructor(name, email) {
    this.id = v4();
    this.name = name;
    this.email = email;
  }
}

export default User;
