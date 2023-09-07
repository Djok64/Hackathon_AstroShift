const express = require("express")

const router = express.Router()

const planetsControllers = require("./controllers/PlanetsControllers")
const survivalItemsControllers = require("./controllers/SurvivalItemsControllers")
const objectController = require("./controllers/objectController")

router.get("/planets", planetsControllers.browse)
router.get("/planets/:id", planetsControllers.read)

router.get("/survivalItems", survivalItemsControllers.browse)
router.get("/survivalItems/:id", survivalItemsControllers.read)

router.get("/objectsByPlanet/:id", objectController.getObjectsByPlanet)

module.exports = router
