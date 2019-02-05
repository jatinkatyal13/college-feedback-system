'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.db = undefined;

var _sequelize = require('sequelize');

var _sequelize2 = _interopRequireDefault(_sequelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../../config.js');

var db = exports.db = new _sequelize2.default({
  database: config.DB.DATABASE,
  password: config.DB.PASSWORD,
  username: config.DB.USERNAME,
  host: config.DB.HOST,
  dialect: 'postgres'
});