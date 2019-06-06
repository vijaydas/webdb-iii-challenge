
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { name: 'Web19'},
        { name: 'iOS6'},
        { name: 'UX3'}
      ]);
    });
};
