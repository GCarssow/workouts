const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')
const configEnv = config[environment]
const knex = require('knex')
const connection = knex(configEnv)

module.exports = connection

// For migrations and seeds run the following commands

// knex migrate:make < your migration file name here >
// knex seed:make < your seed file name here >

// Set up migrations and seeds. Here is an example of both:

// Migrations

// Seeds

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('workouts').del()
    .then(function () {
      // Inserts seed entries
      return knex('workouts').insert([
        
]);
});
}

// knex migrate:latest
// knex seed:run