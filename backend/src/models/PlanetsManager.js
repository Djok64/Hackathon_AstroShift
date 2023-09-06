const AbstractManager = require("./AbstractManager")

class PlanetsManager extends AbstractManager {
  constructor() {
    super({ table: "planet" })
  }

  insert(planet) {
    return this.database.query(
      `insert into planet ("nom", "description", "material", "durability", "weight", "imgUrl") VALUES (?, ?, ?, ?, ?, ?)`,
      [
        planet.nom,
        planet.description,
        planet.material,
        planet.durability,
        planet.weight,
        planet.imgUrl,
      ]
    )
  }

  update(planet) {
    return this.database.query(
      `update ${this.table} set nom = ?, description = ?, material = ?, durability = ?, weight = ?, imgUrl = ?`, // Utilisation de "id" au lieu de "planet_id"
      [
        planet.nom,
        planet.description,
        planet.material,
        planet.durability,
        planet.weight,
        planet.imgUrl,
      ]
    )
  }
}

module.exports = PlanetsManager
