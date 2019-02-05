'use strict';

var _debug = require('debug');

var _debug2 = _interopRequireDefault(_debug);

var _db = require('./db');

var _server = require('./server');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var config = require('../config.js');

var log = (0, _debug2.default)('server:run');

_db.db.sync({
  alter: config.DB.SYNC_ALTER,
  force: config.DB.SYNC_FORCE
}).then(function () {
  _server.app.listen(config.SERVER.PORT, function () {
    log('Server started on http://localhost:' + config.SERVER.PORT);
  });
});