exports.seed = function (knex, Promise) {
  return knex("plants").insert([
    { nickname: "Tree", species: "Pine", h2oFrequency: "Once a week" },
    { nickname: "Tree", species: "Fir", h2oFrequency: "Twice a week" },
  ]);
};
