const bcrypt = require('bcrypt');

const userDb = require('../../models/feelingProm');

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
  register
}





