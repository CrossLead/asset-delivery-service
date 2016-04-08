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

var _emailDestination = require('./emailDestination');

var _emailDestination2 = _interopRequireDefault(_emailDestination);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _promisify = require('../promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * SESDestination @class
 * @extends {EmailDestination}
 */

var SESEmailDestination = function (_EmailDestination) {
  (0, _inherits3.default)(SESEmailDestination, _EmailDestination);


  /**
   * @param {Object} awsCredentials AWS credentials config object
   */

  function SESEmailDestination(awsCredentials) {
    (0, _classCallCheck3.default)(this, SESEmailDestination);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(SESEmailDestination).call(this));

    if (!awsCredentials) {
      throw new Error('AWS credentials required');
    }

    _this.ses = new _awsSdk2.default.SES(awsCredentials);
    _this.ses.sendEmailAsync = (0, _promisify2.default)(_this.ses.SendEmail);
    return _this;
  }

  (0, _createClass3.default)(SESEmailDestination, [{
    key: 'send',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(src) {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return this.ses.sendEmailAsync({
                  Destination: { ToAddresses: [this._toAddress] },
                  Source: this._fromAddress,
                  Message: {
                    Body: {
                      Text: { Data: src }
                    },
                    Subject: {
                      Data: this._messageSubject
                    }
                  }
                });

              case 3:
                return _context.abrupt('return', _context.sent);

              case 6:
                _context.prev = 6;
                _context.t0 = _context['catch'](0);

                console.log('error: ', _context.t0);

              case 9:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 6]]);
      }));

      function send(_x) {
        return ref.apply(this, arguments);
      }

      return send;
    }()
  }, {
    key: 'setToAddress',
    value: function setToAddress(addr) {
      this._toAddress = addr;
    }
  }, {
    key: 'setFromAddress',
    value: function setFromAddress(addr) {
      this._fromAddress = addr;
    }
  }, {
    key: 'setMessageSubject',
    value: function setMessageSubject(subj) {
      this._messageSubject = subj;
    }
  }]);
  return SESEmailDestination;
}(_emailDestination2.default);

exports.default = SESEmailDestination;
//# sourceMappingURL=sesEmailDestination.js.map
