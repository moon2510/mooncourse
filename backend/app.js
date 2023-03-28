var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var GoogleStrategy = require( 'passport-google-oauth2' ).Strategy;
const cors = require("cors");
const mongoose = require("mongoose");
const isLoggedIn = require('../backend/middleware/auth')
const passport = require('passport');
const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(cors());


passport.use(new GoogleStrategy({
    clientID:     "463573475496-rnvq84ltmnm5ffmpk1786pbl2as1v2j0.apps.googleusercontent.com",
    clientSecret: "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",
    callbackURL: "/auth/google/callback",
    passReqToCallback   : true
  },
  function(request, accessToken, refreshToken, profile, done) {
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return done(err, user);
    });
  }
));


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var courseRouter = require('./routes/coursesLecturer');
var courseLearnerRouter = require('./routes/courseLearner');
var lessonRouter = require('./routes/lesson');
var topicRouter = require('./routes/topic');
var transactionRouter = require('./routes/transaction');
const { config } = require('process');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', indexRouter);
app.use('/user', usersRouter);
app.use('/user', courseLearnerRouter);
app.use('/lecturer', courseRouter);
app.use('/lecturer', lessonRouter);
app.use('/lecturer', topicRouter);
app.use('/transaction', transactionRouter);

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

// Connect to mongodb
const URI =
  "mongodb+srv://moon2510:Ni25102001@finalcluster.2iswqpq.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(
  URI,
  {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  },
  (err) => {
    if (err) throw err;
    console.log("Connected to MongoDB!!!");
  }
);

// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => {
//   console.log("Server is running on port", PORT);
// });



module.exports = app;
