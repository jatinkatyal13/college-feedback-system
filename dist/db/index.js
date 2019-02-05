'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = exports.db = undefined;

var _config = require('./config');

Object.defineProperty(exports, 'db', {
  enumerable: true,
  get: function get() {
    return _config.db;
  }
});

var _models = require('./models');

// Run associations here


// Export associated models
exports.Users = _models.Users;