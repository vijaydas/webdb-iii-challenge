const express = require('express');
const helmet = require('helmet');
const knex = require('knex');
const Cohorts = require("./models/cohortModel");
//const Students = require("./models/studentModel");

const knexConfig = require('./knexfile.js');
  
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cohorts', async (req, res) => {
  // get the roles from the database
  try {
    const cohorts = await Cohorts.find(); // all the records from the table
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get('/api/cohorts/:id', async (req, res) => {
  // get the roles from the database
  const id = req.params.id;
  try {
    const cohort = await Cohorts.findById(id); // all the records from the table
    res.status(200).json(cohort);
  } catch (error) {
    res.status(500).json(error);
  }
});

server.get('/api/cohorts/:id/students', async (req, res) => {
  const {id} = req.params;
  console.log(`id`, id)
  try {
    const students = await Cohorts.getCohortStudents(id);
    console.log('students', students)
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json(error);
  }

});




server.get('/api/students', async (req, res) => {
  // get the roles from the database
    try {
    const cohorts = await db('students'); // all the records from the table
    res.status(200).json(cohorts);
  } catch (error) {
    res.status(500).json(error);
  }
});


const port = process.env.PORT || 5050;
server.listen(port, () =>
  console.log(`\n** API running on http://localhost:${port} **\n`)
);
