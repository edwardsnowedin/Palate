const dotEnv          = require('dotenv').config({silent: true});
const express         = require('express');
const morgan          = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
const indexRouter     = require('./routes/index.js');
const authRouter      = require('./routes/auth.js');
const usersRouter     = require('./routes/users.js');
// const homeRoute       = require('./routes/home.js');
const loginRoute      = require('./routes/login.js');
const mapRoute        = require('./routes/map.js');
const signupRoute     = require('./routes/signUp.js');
const recipeSearchRoute = require('./routes/recipeSearch.js');


const app             = express();
const SECRET          = 'tacos3000';


app.set('view engine', 'ejs');

// log requests to STDOUT
app.use(morgan('dev'));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

// middleware for method override
app.use(methodOverride('_method'));

// This is how we read the cookies sent over from the browser
app.use(cookieParser());

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: SECRET
}));

// Set static file root folder
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/userLogin', loginRoute);
app.use('/signUp', signupRoute);
app.use('/map', mapRoute);
app.use('/recipeSearch', recipeSearchRoute);


// Listen on port for connections
// process.env.PORT is needed for when we deploy to Heroku
const port = process.env.PORT || process.argv[2] || 3000;
app.listen(port, () => console.log('Server is listening on', `${port}`));
