const AbstractManager = require("./AbstractManager")

class PlanetsManager extends AbstractManager {
  constructor() {
    super({ table: "planet" })
  }
}

module.exports = PlanetsManager
