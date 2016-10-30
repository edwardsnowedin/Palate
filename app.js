const dotEnv          = require('dotenv').config({silent: true});
const express         = require('express');
const logger         = require('morgan');
const path            = require('path');
const bodyParser      = require('body-parser');
const session         = require('express-session');
const cookieParser    = require('cookie-parser');
const methodOverride  = require('method-override');
// const authRouter      = require('./routes/auth');
// const usersRouter     = require('./routes/users');
const homeRoute       = require('./routes/home');
const mapRoute        =  require('./routes/map');

const app  = express();
const port = process.env.PORT || process.argv[2] || 3000;

app.set('view engine', 'ejs');
app.use(logger('dev'));

app.use(express.static(__dirname + '/public'));


app.listen(port, () => console.log('Server is listening on', `${port}`));


app.use('/', homeRoute);
app.use('/map', mapRoute);
