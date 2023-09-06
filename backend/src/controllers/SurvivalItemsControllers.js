const models = require("../models")

const browse = (req, res) => {
  models.survivalItems
    .findAll()
    .then(([rows]) => {
      res.send(rows)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const read = (req, res) => {
  models.survivalItems
    .find(req.params.id)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404)
      } else {
        res.send(rows[0])
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const edit = (req, res) => {
  const survivalItems = req.body

  // TODO validations (length, format...)

  survivalItems.id = parseInt(req.params.id, 10)

  models.survivalItems
    .update(survivalItems)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const add = (req, res) => {
  const survivalItems = req.body

  // TODO validations (length, format...)

  models.survivalItems
    .insert(survivalItems)
    .then(([result]) => {
      res.location(`/survivalItems/${result.insertId}`).sendStatus(201)
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

const destroy = (req, res) => {
  models.survivalItems
    .delete(req.params.id)
    .then(([result]) => {
      if (result.affectedRows === 0) {
        res.sendStatus(404)
      } else {
        res.sendStatus(204)
      }
    })
    .catch((err) => {
      console.error(err)
      res.sendStatus(500)
    })
}

module.exports = {
  browse,
  read,
  edit,
  add,
  destroy,
}
