exports.up = function (knex) {
  return knex.schema
    .createTable("users", (tbl) => {
      tbl.increments("user_id");
      tbl.string("username", 128).notNullable().unique().index();
      tbl.string("phoneNumber", 20).notNullable();
      tbl.string("password", 256).notNullable();
    })
    .createTable("plants", (tbl) => {
      tbl.increments("plant_id");
      tbl.string("nickname", 128).notNullable().index();
      tbl.string("species", 128).notNullable();
      tbl.string("h2oFrequency", 256).notNullable();
    });
};

exports.down = async function (knex) {
  return knex.schema.dropTableIfExists("users").dropTableIfExists("plants");
};
