/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = (knex) => {
  return knex.schema.table('card', (table) => {
    table.integer('votes').defaultTo(0); // Add a 'votes' column
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = (knex) => {
  return knex.schema.table('card', (table) => {
    table.dropColumn('votes'); // Rollback: Remove the 'votes' column
  });
};
