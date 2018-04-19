const pgp = require('pg-promise')();
const config = require('../config/dbCongig');
const db = pgp(config);






function allUsers() {
  const queryPromise = db.any(
    `SELECT *
    FROM users ORDER BY id`);
  return queryPromise;
}

function findUno(username) {
  const queryPromise = db.one(
    `SELECT *
    FROM users
    WHERE username = $1`, username);
  return queryPromise;
}


