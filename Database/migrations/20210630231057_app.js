exports.up = function (knex) {
  // End database changes in migration up function
  return knex.schema.createTable("app-users", (table) => {
    table.increments();

    table.text("email").unique().notNullable();

    table.string("password", 20).notNullable();
  });
};

exports.down = function (knex) {
  // Undo database changes in migration down function
  return knex.schema.dropTableIfExist("app-users");
};
