const AbstractManager = require("./AbstractManager")

class objectsByPlanetManager extends AbstractManager {
  constructor() {
    super({ table: "planet_has_objetssurvie" })
  }

  // Vous n'avez pas besoin de ces méthodes insert et update pour cette opération

  findObjectsByPlanet(planetId) {
    return this.database.query(
      `
      SELECT o.nom, o.imgUrl AS objectNom
      FROM planet_has_objetssurvie pho
      JOIN objetssurvie o ON pho.objetssurvie_id = o.id
      WHERE pho.planet_id = ?
      `,
      [planetId]
    )
  }
}

module.exports = objectsByPlanetManager
