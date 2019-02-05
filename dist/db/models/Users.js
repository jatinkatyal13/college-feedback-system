'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Users = undefined;

var _config = require('../config');

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Users = exports.Users = _config.db.define('users', {
  rollNumbers: {
    type: _sequelize2.default.BIGINT,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: _sequelize2.default.STRING,
    allowNull: false
  }
});