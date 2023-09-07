// const models = require("../models")

// const getObjectsByPlanet = (req, res) => {
//   models.objectsByPlanet
//     .find(req.params.id)
//     .then(([rows]) => {
//       if (rows[0] == null) {
//         res.sendStatus(404)
//       } else {
//         res.send(rows[0])
//       }
//     })
//     .catch((err) => {
//       console.error(err)
//       res.sendStatus(500)
//     })
// }

// module.exports = {
//   getObjectsByPlanet,
// }

const models = require("../models")

const getObjectsByPlanet = (req, res) => {
  const planetId = req.params.id
  models.objectsByPlanet
    .findObjectsByPlanet(planetId)
    .then(([rows]) => {
      if (rows.length === 0) {
        res
          .status(404)
          .json({ message: "Aucun objet trouvé pour cette planète." })
      } else {
        res.status(200).json(rows)
      }
    })
    .catch((err) => {
      console.error(err)
      res
        .status(500)
        .json({ error: "Erreur lors de la récupération des objets." })
    })
}

module.exports = {
  getObjectsByPlanet,
}
