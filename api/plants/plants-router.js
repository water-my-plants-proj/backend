const express = require("express");
const helpers = require("./plants-model");
const restricted = require("../auth/restricted-middleware.js");
const router = express.Router();

router.get("/plants", (req, res, next) => {
  helpers
    .getPlants()
    .then((plants) => {
      res.status(200).json(plants);
    })
    .catch(next); // our custom err handling middleware in server.js will trap this
});

router.post("/plants", restricted, (req, res, next) => {
  // it would be nice to have animal validation midd
  helpers
    .createPlant(req.body)
    .then((animal) => {
      res.status(201).json(animal);
    })
    .catch(next);
});

router.delete("/plants/:plants_id", restricted, (req, res, next) => {
  // it would be nice to have plants_id validation midd
  helpers
    .deletePlant(req.params.plants_id)
    .then((count) => {
      if (count > 0) {
        res.status(204).end();
      } else {
        res.status(404).json({ message: "Record not found" });
      }
    })
    .catch(next);
});

module.exports = router;
