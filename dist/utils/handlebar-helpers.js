'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ifeq = ifeq;
exports.ifcontains = ifcontains;
function ifeq(arg1, arg2, options) {
  if (arg1 === arg2) {
    return options.fn(this);
  }
  return options.inverse(this);
}

function ifcontains(arr, predicate, options) {
  arr = arr.split(',');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var check = _step.value;

      if (check === predicate) {
        return options.fn(this);
      }
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  return options.inverse(this);
}