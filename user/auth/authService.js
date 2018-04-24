const bcrypt = require('bcrypt');

const userDb = require('../../models/feelingProm');


function login(req, res, next) {
 let user;
 const loginAttempt = {
  username: req.body.username,
  pword: req.body.pword
 }
 userDb.oneUser(loginAttempt.username)
 .then(userInfo => {
  user = userInfo
  return bcrypt.compareSync(loginAttempt.pword, userInfo.pword)
 })
 .then(isValidPass => {
  if(!isValidPass) {
    throw {
      message: 'try again'
    }
  }

  req.session.user;
  req.session.locals = user

  next();
 })
 .catch(err => {
  next(err);
 })
}

function logout(req, res, next) {
  req.session.destroy(err => next(err));
}















function register(req, res, next) {
  console.log(req.body)
  const salt = parseInt(process.env.SALT)
  const hash = bcrypt.hashSync(req.body.password, salt)
  const user = {
    username: req.body.username,
    pword: hash
  }
  userDb.newUser(user)
  .then(user => {
    if (!user) {
      throw {
        message: 'cant get in'
      }
    }
    req.session.user = user;
    next();
  })
  .catch(err => {
    next(err);
  })
}




module.exports = {
  login,
  logout,
  register,
  loginRequired: [
    /* this is either going to resolve to next(false) or next(null) */
    (req, res, next) => next(!req.session.user || null),
    (err, req, res, next) => res.sendStatus(401),
  ]
  }




