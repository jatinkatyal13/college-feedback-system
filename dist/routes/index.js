'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = undefined;

var _express = require('express');

var _feedback = require('./feedback');

var route = exports.route = (0, _express.Router)();

route.use(function (req, res, next) {
  if (req.user) {
    res.locals.user = req.user;
    res.locals.loggedIn = true;
  }
  next();
});

route.use('/feedback', _feedback.route);
route.use(_feedback.route);
route.get('/', function (req, res) {
  res.render('pages/index');
});