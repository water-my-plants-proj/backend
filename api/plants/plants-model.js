const db = require("../../database/db-config");

function getPlants() {
  return db("plants");
}

// function getAnimals() {
//   // INCLUDING SPECIES NAME
//   return db("animals as a")
//     .leftJoin("species as s", "s.species_id", "a.species_id")
//     .select("a.animal_id", "a.animal_name", "s.species_name");
// }

async function createPlant(Plant) {
  const [plant_id] = await db("plants").insert(Plant);
  return getPlants().where({ plant_id }).first();
}

function deletePlant(plant_id) {
  return db("plants").where({ plant_id }).del();
}

module.exports = {
  getPlants,

  createPlant,
  deletePlant,
};
