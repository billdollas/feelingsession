require('dotenv').config();

const path = require('path');

const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const router = require('./routes/feelingRoutes');
const session = require('express-session');

//auth
// const authService = require('./user/auth/authService');
// const authRouter = require('./user/auth/authRouter');

const app = express();

//cont auth
// app.set('superSecret', process.env.SERVER_SECRET);

// app.use(session({
//   secret: app.get('superSecret'),
//   resave: false,
//   saveUninitialized: false,
// }));

//route handler auth
// app.use('/auth', authRouter);
// app.get('/', (req, res) =>{
//   res.render('welcome', { message: 'Welcome, be shady'});
// });





const PORT = 3000;



app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname, 'style')));

app.use('/', router);


app.listen(PORT, () => {
  console.log(`pero like running on ${PORT}, in ${app.get('env')}mode.`);
}).on('error', console.error);