require('babel-register');

module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      database: 'bright',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
    },
  },
};
