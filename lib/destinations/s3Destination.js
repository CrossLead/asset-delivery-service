'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _destination = require('./destination');

var _destination2 = _interopRequireDefault(_destination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

class S3Destination extends _destination2.default {

  constructor() {
    super();
  }

  send() {
    return _asyncToGenerator(function* () {})();
  }
}
exports.default = S3Destination;
//# sourceMappingURL=s3Destination.js.map
