exports.up = function(knex) {
    return knex.schema.createTable('users', function (table){
        table.string('email').primary();
        table.string('name').notNullable();
        table.string('password').notNullable();
    });
};

exports.down = function(knex) {
    knex.schema.dropTable('users');
};
