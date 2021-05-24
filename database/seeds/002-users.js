exports.seed = async function (knex) {
  // await knex('userz').truncate()
  await knex("users").insert([
    { username: "Sam", phoneNumber: "775-131-3132", password: "Hello" },
    {
      username: "doug",
      phoneNumber: "775-131-6666",
      password: "HelloEveryBody",
    },
  ]);
};
