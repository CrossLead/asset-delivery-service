'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _destination = require('./destination');

var _destination2 = _interopRequireDefault(_destination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S3Destination = function (_Destination) {
  (0, _inherits3.default)(S3Destination, _Destination);

  function S3Destination() {
    (0, _classCallCheck3.default)(this, S3Destination);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(S3Destination).call(this));
  }

  (0, _createClass3.default)(S3Destination, [{
    key: 'send',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send() {
        return ref.apply(this, arguments);
      }

      return send;
    }()
  }]);
  return S3Destination;
}(_destination2.default);

exports.default = S3Destination;
//# sourceMappingURL=s3Destination.js.map
