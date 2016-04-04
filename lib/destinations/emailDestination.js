'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _destination = require('./destination');

var _destination2 = _interopRequireDefault(_destination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * EmailDestination class
 * @abstract
 * @type {Destination}
 */
class EmailDestination extends _destination2.default {

  constructor() {
    super();
  }

  setToAddress(addr) {
    throw new TypeError('setToAddress must be implemented');
  }

  setFromAddress(addr) {
    throw new TypeError('setFromAddress must be implemented');
  }
}
exports.default = EmailDestination;
//# sourceMappingURL=emailDestination.js.map
