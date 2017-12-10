'use strict';

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/sozc_dev',
    migration: {
      connection: './migrations'
    },
    seed: {
      connection: './seeds'
    }
  },

  test: {
    client: 'pg',
    connection: 'postgres://localhost/sozc_dev',
    migration: {
      connection: './migrations'
    },
    seed: {
      connection: './seeds'
    }
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
