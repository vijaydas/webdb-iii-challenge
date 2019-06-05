
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Ming Liu'},
        { name: 'James Pak'},
        { name: 'Brandon Pampuch'}
      ]);
    });
};
