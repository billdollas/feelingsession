require('dotenv').config();


const pgp = require('pg-promise')();

const config = require('./dbConfig');


function setDatabase() {
    if (process.env.NODE_ENV === 'development' || !process.env.NODE_ENV) {
        return pgp(config);
    } else if (process.env.NODE_ENV === 'production') {
        return pgp(process.env.DATABASE_URL);
    }
}


const db = setDatabase();

module.exports = db;
