const db = require("../../database/connection.js");

module.exports = {
  add,
  find,
  findBy,
  findById,
};

function find() {
  return db("users as u").select("u.user_id", "u.username");
}

function findBy(filter) {
  return db("users as u")
    .select("u.user_id", "u.username", "u.password")
    .where(filter);
}

async function add(user) {
  const [id] = await db("users").insert(user);
  return findById(id);
}

function findById(id) {
  return db("users as u")
    .select("u.user_id", "u.username")
    .where("u.user_id", id)
    .first();
}
