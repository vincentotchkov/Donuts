
exports.up = function(knex, Promise) {
  return knex.schema.createTable('employee', function(table) {
  table.increments();
  table.string('first_name').notNullable();
  table.string('last_name').notNullable();
  table.integer('favorite_donut').references('id').inTable('donuts');
});
};

exports.down = function(knex, Promise) {
  return knex.schema.createTable('employee');

};
