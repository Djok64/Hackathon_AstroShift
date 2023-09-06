const AbstractManager = require("./AbstractManager")

class SurvivalItemsManager extends AbstractManager {
  constructor() {
    super({ table: "objetssurvie" })
  }
}

module.exports = SurvivalItemsManager
