import Tables from '../constants/tableConstants';

const ID = 'id';

export function up(knex, Promise) {
  return Promise.all([
    knex.schema.createTable(Tables.EVENTS, (table) => {
      table.increments(ID).primary();
      table.string('title');
      table.timestamps();
      table.dateTime('start_date');
      table.dateTime('end_date');
      table.string('description');
      table.boolean('is_featured');
    }),

    knex.schema.createTable(Tables.CATEGORIES, (table) => {
      table.increments(ID).primary();
      table.string('name');
    }),

    knex.schema.createTable(Tables.EVENTS_CATEGORIES, (table) => {
      table.increments(ID).primary();
      table.integer('event_id')
        .references(ID)
        .inTable(Tables.EVENTS)
        .onDelete('CASCADE');
      table.integer('category_id')
        .references(ID)
        .inTable(Tables.CATEGORIES)
        .onDelete('CASCADE');
    }),
  ]);
}

export function down(knex, Promise) {
  return Promise.all([
    knex.schema.dropTable(Tables.EVENTS),
    knex.schema.dropTable(Tables.CATEGORIES),
    knex.schema.dropTable(Tables.EVENTS_CATEGORIES),
  ]);
}
