function viewUsers(req, res) {
  res.json({
    users: res.locals.users,
    status: 'ok'
  })
}
function viewNew(req, res) {
  res.json({
    users: res.locals.users,
    status: 'ok'
  })
}

function viewOneU(req, res) {
  res.json({
    users: res.locals.users,
    status: 'ok'
  })
}

function viewPost(req,res) {
  // res.json({
  //   actions: res.locals.actions,
  //   status: 'ok'
  // })
  console.log('whateva')

  res.render('pages/home', {post: res.locals.actions});
  console.log(res.locals.actions)
}

function viewOnePost(req, res) {
  // res.json({
  //   actions: res.locals.actions,
  //   status: 'ok'
  // })
  res.render('pages/home');
}

function viewNewPost(req, res) {
  // res.json({
  //   locals: res.locals,
  //   status: 'ok'
  // })

  res.render('pages/home', {post: res.locals.actions});
}

function viewFixTxt(req, res) {
  // res.json({
  //   actions: res.locals.actions,
  //   status: 'ok'
  // })
  res.render('pages/update', {post: res.locals.actions});
}

function gone (req, res) {
  res.json({
    actions: res.locals.actions,
    status: 'ok'
  })
}

function loginForm (req, res) {
  res.render('pages/index');
}

function registerForm (req, res) {
  res.render('pages/register');
}

function homePg (req, res) {
  res.render('pages/home', {user: req.session.locals.id, post:res.locals.actions});
}

module.exports = {
  viewUsers,
  viewNew,
  viewOneU,
  viewPost,
  viewOnePost,
  viewNewPost,
  viewFixTxt,
  gone,
  registerForm,
  homePg,
  loginForm
}
