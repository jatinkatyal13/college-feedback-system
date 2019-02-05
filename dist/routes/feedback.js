'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.route = undefined;

var _express = require('express');

var route = exports.route = (0, _express.Router)();

route.get('/', function (req, res) {
  res.render('pages/feedback/index');
});