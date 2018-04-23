const pgp = require('pg-promise')();
const config = require('../config/dbConfig');
const db = pgp(config);




function allUsers() {
  const queryPromise = db.many(
    `SELECT *
    FROM users`);
  return queryPromise;
}

function oneUser(username) {
  const queryPromise = db.one(
    `SELECT *
    FROM users
    WHERE username = $1`, username);
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
    FROM actions
    WHERE post_id = $1`, id);
  return queryPromise;
}


function newPost(data) {
  console.log(data);
  const queryPromise = db.one(`
    INSERT INTO actions (post, user_id)
    VALUES ($/post/, $/user_id/)
    RETURNING *`, data);
  return queryPromise;
}


//maybe an update new user button,
//everytime clicked opposed to update post
function updatePost(post) {
  console.log(post);
  const queryPromise = db.one(`
    UPDATE actions
    SET post = $/post/
    WHERE post_id = $/post_id/
    RETURNING *`, post);
  return queryPromise;
}


//delete post
function destroyPost(id) {
  console.log(id);
  const queryPromise = db.none(`
    DELETE FROM actions
    WHERE post_id = $1`, id);

  return queryPromise;
}

//to vieww eveything from actions
function viewAllPost() {
  const queryPromise = db.many(
    `SELECT * FROM actions`);
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
  destroyPost,
  viewAllPost
}


