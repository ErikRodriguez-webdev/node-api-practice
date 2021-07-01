const db = require("../../Database/db-config.js");

module.exports = {
  insertUser,
  updateUser,
};

function insertUser(user) {
  return db("app-users")
    .insert(user)
    .then((ids) => ({ id: ids[0] }));
}

function updateUser(id, user) {
  return db("app-users").where("id", Number(id)).update(user);
}
