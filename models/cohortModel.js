const knex = require("knex");
const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

module.exports = {
    find,
    findById,
    add,
    update,
    remove,
    getCohortStudents
};

function find() {
    return db('cohorts');
}

function findById(id) {
    return db('cohorts')
      .where({ id })
      .first();
  }

function add(zoo) {
    return db('cohorts')
    .insert(zoo)

}

function update(id, changes) {
    return db('cohorts')
    .where({id})
    .update(changes)
}

function remove(id) {
    return db('cohorts')
    .where({id})
    .del()
}

function getCohortStudents(cohort_id) {
    return db('students as s')
    .where({cohort_id})
}

