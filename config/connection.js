require('dotenv').config();


const pgp = require('pg-promise')();

// const config = require('./dbConfig');

const cn = {
  host: 'localhost',
  port: 5433,
  database: 'feelings_db'
}


const db = pgp(process.env.DATABASE_URL || cn);

console.log(process.env.DATABASE_URL);

module.exports = db;
