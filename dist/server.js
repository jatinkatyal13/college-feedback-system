'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.app = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _expressFlash = require('express-flash');

var _expressFlash2 = _interopRequireDefault(_expressFlash);

var _expressHbs = require('express-hbs');

var _expressHbs2 = _interopRequireDefault(_expressHbs);

var _expressSession = require('express-session');

var _expressSession2 = _interopRequireDefault(_expressSession);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _setup = require('./passport/setup');

var _routes = require('./routes/');

var _handlebarHelpers = require('./utils/handlebar-helpers');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../config.js');

var app = (0, _express2.default)();

// Setup HBS engine -------- start -------
app.engine('hbs', _expressHbs2.default.express4({
  partialsDir: _path2.default.join(__dirname, '../views/partials'),
  layoutsDir: _path2.default.join(__dirname, '../views/layouts'),
  defaultLayout: _path2.default.join(__dirname, '../views/layouts/main.hbs')
}));
app.set('view engine', 'hbs');
app.set('views', _path2.default.join(__dirname, '../views'));
_expressHbs2.default.registerHelper('ifeq', _handlebarHelpers.ifeq);
_expressHbs2.default.registerHelper('ifcontains', _handlebarHelpers.ifcontains);
// Setup HBS engine -------- end -------

// Setup Body parsers -------- start -------
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: true }));
// Setup Body parsers -------- end -------

// Setup Session and Passport ---------- start -----------
app.use((0, _expressSession2.default)({
  secret: config.SESSION.SECRET
}));
app.use((0, _expressFlash2.default)());
app.use(_setup.passport.initialize());
app.use(_setup.passport.session());
// Setup Session and Passport ---------- end -----------

app.use('/', _express2.default.static(_path2.default.join(__dirname, '../public')));
app.use('/', _routes.route);

exports.app = app;