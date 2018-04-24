const express = require('express');
const router = express.Router();
const controller = require('../controllers/regControllers');
const viewController = require('../controllers/viewController');
const authService = require('../user/auth/authService')

const db = require('../models/feelingProm');

//le home
router.get('/', (req,res) => {
  res.render('../views/pages/index');
});


router.route('/home')
.post(authService.login, controller.evryPost, viewController.homePg)


router.route('/users/:id')
.get(controller.soloUser, viewController.viewOneU)

router.route('/register').post(authService.register, controller.evryPost, viewController.homePg);

router.route('/post')
.get(controller.evryPost, (req,res) =>{res.send('hello')} )
.post(controller.newTxt, controller.evryPost, viewController.homePg)

router.route('/post/:id')
.get(controller.soloPost, viewController.viewOnePost)
.put(controller.fixTxt, viewController.viewFixTxt)
.delete(controller.delTxt, viewController.gone)






module.exports = router;
