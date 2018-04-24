const authRouter = require('express').Router();
const authService = require('./authService');
const viewController = require('../../controllers/viewController');



authRouter.post('/login', authService.login, viewController.homePg)
authRouter.get('/login', viewController.loginForm)

authRouter.get('/logout', authService.logout, viewController.loginForm)

authRouter.get('/register', viewController.registerForm )
authRouter.post('/register', authService.register, viewController.homePg)

// at the view controller put posting page
//(post) => console.log('hi')


authRouter.use((err, req, res, next) => {
  console.log(err);
  res.json({error: err});
});

module.exports = authRouter;
