const { v4: uuidv4 } = require('uuid');
const { UserType } = require('../common/enums');

class User {
  constructor({
    first_name,
    last_name,
    email,
    password_hash,
    user_type = UserType.PASSENGER,
  }) {
    this.id = uuidv4();
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.password_hash = password_hash;
    this.user_type = user_type;
    this.date_joined = new Date();
    this.available_to_drive = user_type === UserType.DRIVER;
  }
}

module.exports = User;
