
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Ming Liu', cohort_id: 4 },
        { name: 'James Pak', cohort_id: 4},
        { name: 'Brandon Pampuch', cohort_id: 4}
      ]);
    });
};
