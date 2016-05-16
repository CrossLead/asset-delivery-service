'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

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

/**
 * EmailDestination class
 * @abstract
 * @type {Destination}
 */

var EmailDestination = function (_Destination) {
  (0, _inherits3.default)(EmailDestination, _Destination);

  function EmailDestination() {
    (0, _classCallCheck3.default)(this, EmailDestination);
    return (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(EmailDestination).call(this));
  }

  (0, _createClass3.default)(EmailDestination, [{
    key: 'setToAddress',
    value: function setToAddress(addr) {
      throw new TypeError('setToAddress must be implemented');
    }
  }, {
    key: 'setFromAddress',
    value: function setFromAddress(addr) {
      throw new TypeError('setFromAddress must be implemented');
    }
  }]);
  return EmailDestination;
}(_destination2.default);

exports.default = EmailDestination;
//# sourceMappingURL=emailDestination.js.map
