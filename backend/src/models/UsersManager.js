const AbstractManager = require("./AbstractManager")

class UsersManager extends AbstractManager {
  constructor() {
    super({ table: "users" })
  }

  insert(users) {
    return this.database.query(
      `insert into ${this.table} (lastname, firstname, age, home_country) VALUES (?, ?, ?, ?)`,
      [users.lastname, users.firstname, users.age, users.home_country]
    )
  }

  update(users) {
    return this.database.query(
      `update ${this.table} set credits = ?, where id = ?`,
      [users.credits, users.id]
    )
  }
}

module.exports = UsersManager
