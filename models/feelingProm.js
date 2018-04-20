const pgp = require('pg-promise')();
const config = require('../config/dbConfig');
const db = pgp(config);




function allUsers() {
  const queryPromise = db.many(
    `SELECT *
    FROM users`);
  return queryPromise;
}

function oneUser(id) {
  const queryPromise = db.one(
    `SELECT *
    FROM users
    WHERE id = $1`, id);
  return queryPromise;
}

function newUser(user) {
  const queryPromise = db.one(`
    INSERT INTO users (username, pword)
    VALUES ($/username/, $/pword/)
    RETURNING *`, user);
  return queryPromise;
}

function onePost(id) {
  const queryPromise = db.one(
    `SELECT *
    FROM post
    WHERE post_id = $1`, id);
  return queryPromise;
}


function newPost(id) {
  const queryPromise = db.one(`
    INSERT INTO actions
    VALUES ($/post/)
    RETURNING *`, id);
  return queryPromise;
}


//maybe an update new user button,
//everytime clicked opposed to update post
function updatePost(post) {
  const queryPromise = db.one(`
    UPDATE actions
    WHERE post = $/post/
    RETURNING *`);
  return queryPromise;
}


//delete post
function destroyPost(id) {
  const queryPromise = db.one(`
    DELETE FROM actions
    WHERE post_id = post_id`, id);
  return queryPromise;
}



//figure out how to update depending on the user post
//if user id matches username and post id









module.exports = {
  allUsers,
  oneUser,
  onePost,
  newUser,
  newPost,
  updatePost,
  destroyPost
}


