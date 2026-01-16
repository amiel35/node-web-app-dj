require('dotenv').config();
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');
const mongoDBURL = process.env.MONGODB_URL;
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var dashRouter = require('./routes/dash');
var registerRouter = require('./routes/register');
const session = require('express-session');
const crypto = require('crypto');

const dbRouter = require('./routes/collection_update');
const crudRouter = require('./routes/skeleton_for_crud_operations');

var app = express();

app.use(session({
	secret: crypto.randomBytes(32).toString('hex'),
	resave: false,
	saveUninitialized: false,
	cookie: { 
		secure: false, 
		httpOnly: true,
		maxAge: 24 * 60 * 60 * 1000
	}
}));



mongoose.connect(mongoDBURL, {
	useNewURLParser: true,
	useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch( err => console.error('MongoDB connection error:', err));

app.use('/find', dbRouter);
app.use('/crud', crudRouter);



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/register', registerRouter);
app.use('/dash', dashRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
