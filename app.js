var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const ejs =require('ejs');
const bodyParser =require('body-parser');
const port =3000;

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// Configurazione di EJS
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));

// error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  res.status(err.status || 500);
  res.render('error');
});


//get e render---------------------------------------------------------------------------------------------------------

app.get('/', function(req, res, next) {
    res.render('index');
});

app.get('/prenota', function(req, res, next) {
  res.render('prenota');
});

app.get('/social', function(req, res, next) {
  res.render('social');
});

  app.listen(port, () => {
    console.log('Server in esecuzione su http://localhost:'+port);
  });


module.exports = app;