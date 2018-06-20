exports.up = function(knex, Promise) {
    return knex.schema.createTable('wod', (table) => {
      table.increments()
      table.text('name')
      table.text('equipment_needed')
      table.text('the_workout')
      table.text('time_required')
      table.text('source')
    })
  };
  
  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('wod')
  };