const express = require('express');
const helmet = require('helmet');
const knex = require('knex');

const knexConfig = require('./knexfile.js');
  
const db = knex(knexConfig.development);

const server = express();

server.use(helmet());
server.use(express.json());

server.get('/api/cohorts', async (req, res) => {
  // get the roles from the database
  try {
    const cohorts = await db('cohorts'); // all the records from the table
    res.status(200).json(cohorts);
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
