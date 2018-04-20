const express = require('express');
const router = express.Router();

const db = require('../models/feelingProm');

//le home
router.get('/', (req,res) => {
  res.render('../views/pages/index');
});

// router.get('/users', (req, res) => {
//   res.send('i return students');
// });
//gets me all of the users

function evryUser(req,res) {
  db.allUsers()
  .then(data => {
    console.log(data);
    res.json({
      data: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  });
}

//checks for users with their id
// router.get('/users/:id', (req, res) => {
// res.send('i return id');
// });
function soloUser(req,res){
  console.log(req.params);
  db.oneUser(req.params.id)
  .then(data => {
    console.log(data);
    res.json({
      data: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  });
}

//create
// router.post('/users', (req,res) => {
// res.send('i create new users');
// });
//creates a new user
function newYou(req,res) {
  db.newUser(req.body)
  .then(data => {
    console.log(data);
    res.json({
      data: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  });
}

//check for post by id
function soloPost(req,res){
  db.onePost(req.params.id)
  .then(postId => {
    console.log(postId);
    res.json({
      postId: postId
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  });
}

//creates a new text
function newTxt(req, res) {
  db.newPost(req.body)
  .then(data => {
    console.log(data);
    res.json({
      data: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  });
}

//update
// router.put('/users/:id', (req, res) => {
// res.send(`i update students ${req.params.id}`);
// });
//updates the post
function fixTxt (req, res) {
  db.updatePost(req.body)
  .then(data => {
    console.log(data);
    res.json ({
      data: data
    })
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    });
  });
}



//delete
// router.delete('/users/:id', (req,res) => {
//   res.send(`i destroy ${req.params.id}`)
// });

function delTxt(req,res){
  db.destroyPost(req.params.id)
  .then(() => {
    res.json({
      status: 'gone',
      message: `long gone ${req.params.id}`
    });
  })
  .catch(err => {
    res.status(500).json({
      status: 'error',
      message: err.message
    })
  })
}

//user to user id possible messaging
// router.get('/usertouser/:id', (req,res) => {
//   res.send('i return users with other users');
// });

//











router.route('/users')
.get(evryUser)
.post(newYou)
// .post(newTxt)


router.route('/users/:id')
.get(soloUser)
// .put(fixTxt)


router.route('/post')
.post(newTxt)

router.route('/post/:id')
.get(soloPost)






























module.exports = router;
