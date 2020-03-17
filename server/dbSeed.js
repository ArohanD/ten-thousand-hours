const dbConfig = require('../config.js')
const knex = require('knex')(dbConfig)

knex.schema.dropTableIfExists('hour_logs')
.then(() => {
  return knex.schema.createTable('hour_logs', (table) => {
    table.increments('log_id').primary();
    table.string('user')
    table.string('log_name');
    table.integer('remaining');
    table.timestamp('created_at').defaultTo(knex.fn.now());
  })
})
.then(() => {
  console.log('Table Created')
})
.catch(console.log)