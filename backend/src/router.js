const express = require("express")

const router = express.Router()

const PlanetsControllers = require("./controllers/PlanetsControllers")
const SurvivalItemsControllers = require("./controllers/SurvivalItemsControllers")
const UsersControllers = require("./controllers/UsersControllers")

router.get("/planets", PlanetsControllers.browse)
router.get("/planets/:id", PlanetsControllers.read)

router.get("/survivalItems", SurvivalItemsControllers.browse)
router.get("/survivalItems/:id", SurvivalItemsControllers.read)

router.post("/users", UsersControllers.add)
router.get("/users", UsersControllers.browse)
router.get("/users/:id", UsersControllers.read)

module.exports = router
