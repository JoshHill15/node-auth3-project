
exports.up = function(knex) {
    return knex.schema.createTable("users", tbl => {
         tbl.increments()
         tbl.text("username",120).notNullable()
         tbl.text("password",120).notNullable()
         tbl.text("role",120).notNullable()
     })
   };
   
   exports.down = function(knex) {
     return knex.schema.dropTableIfExists("users")
   };
   