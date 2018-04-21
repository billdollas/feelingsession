const authRouter = require('express').Router();
const authService = require('./authService');
const viewController = require('../../controllers/viewController');



authRouter.get('/', viewController.form )
authRouter.post('/', authService.register, (post) => console.log(post))
// at the view controller put posting page


authRouter.use((err, req, res, next) => {
  console.log(err);
  res.json({error: err});
});

module.exports = authRouter
