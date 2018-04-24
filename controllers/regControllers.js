const db = require ('../models/feelingProm');


function evryUser(req, res, next) {
  db.allUsers()
  .then(data => {
    res.locals.users = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  });
}

function newYou(req, res, next) {
  db.newUser(req.body)
  .then(data => {
    res.locals.users = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  });
}

function soloUser(req, res, next) {
  db.oneUser(req.params.id)
  .then(data => {
    res.locals.users = data;
    console.log(data);
    next();
  })
  .catch(err =>{
    next(err);
  });
}

function evryPost(req, res, next) {
  console.log('hey')
  db.viewAllPost()
  .then(data => {
    res.locals.actions = data;
    console.log('look below')
    console.log(data);

    next();
  })
  .catch(err =>{
  console.log('error')
  next(err);
  });
}

function soloPost(req, res, next) {
  db.onePost(req.params.id)
  .then(data => {
    res.locals.actions = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  });
}

function newTxt(req, res, next) {
  db.newPost(req.body)
  .then(data => {
    res.locals.actions = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  });
}

function fixTxt(req, res, next) {
  db.updatePost(req.body)
  .then(data => {
    res.locals.actions = data;
    console.log(data);
    next();
  })
  .catch(err => {
    next(err);
  });
}

function delTxt(req, res, next) {
  db.destroyPost(req.params.id)
  .then(data => {
    res.locals.actions = data;
    next();
  })
  .catch(err => {
    next(err);
  });
}



























module.exports = {
  evryUser,
  newYou,
  evryPost,
  soloUser,
  soloPost,
  newTxt,
  fixTxt,
  delTxt

}
