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
  res.json({
    actions: res.locals.actions,
    status: 'ok'
  })
}

function viewOnePost(req, res) {
  res.json({
    actions: res.locals.actions,
    status: 'ok'
  })
}

function viewNewPost(req, res) {
  res.json({
    actions: res.locals.actions,
    status: 'ok'
  })
}

function viewFixTxt(req, res) {
  res.json({
    actions: res.locals.actions,
    status: 'ok'
  })
}

function gone (req, res) {
  res.json({
    actions: res.locals.actions,
    status: 'ok'
  })
}

function form (req, res) {
  res.render('pages/index');
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
  form
}
