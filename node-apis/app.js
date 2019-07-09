var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')
const exjwt = require('express-jwt');
const jwtMW = exjwt({ secret: 'kr!sh@n' });

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');

var app = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/login', loginRouter);
app.use('/', jwtMW, indexRouter);

app.use(function (err, req, res, next) {
    console.log(err)
    if (err.status === 404)
        res.status(404).json({ message: "Not found" });
    else {
        if (err.name === "ValidationError") {
            res.status(500).json({ status: "failed", errors: err.errors });
        } else {
            res.status(500).json({ status: "failed", message: "Something went wrong!!!" });
        }

    }

});

module.exports = app;
