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

var _es6Promisify = require('es6-promisify');

var _es6Promisify2 = _interopRequireDefault(_es6Promisify);

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
    _this.ses.sendEmailAsync = (0, _es6Promisify2.default)(_this.ses.sendRawEmail, _this.ses);
    return _this;
  }

  (0, _createClass3.default)(SESEmailDestination, [{
    key: 'send',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(assetArray, src) {
        var message, element, filePathArr;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                message = ['To: ' + this._toAddress];

                process.env.TRAVIS_COMMIT != undefined ? message.push('\nSubject: Commit ' + process.env.TRAVIS_COMMIT) : message.push('\nSubject: ' + this._messageSubject);
                message.push('\nContent-Type: multipart/mixed; boundary="simple boundary"');

                for (element in assetArray) {
                  filePathArr = element.split('/');

                  message.push('\n');
                  message.push('\n--simple boundary');
                  message.push('\nContent-Type: image/png');
                  message.push('\nContent-Transfer-Encoding: base64');
                  message.push('\nContent-Disposition: inline; filename="' + filePathArr[filePathArr.length - 1] + '"');
                  message.push('\n');
                  message.push('\n' + assetArray[element].toString('base64'));
                  message.push('\n');
                }

                _context.next = 7;
                return this.ses.sendEmailAsync({
                  Source: this._fromAddress,
                  RawMessage: {
                    Data: message.join('')
                  }
                });

              case 7:
                return _context.abrupt('return', _context.sent);

              case 10:
                _context.prev = 10;
                _context.t0 = _context['catch'](0);

                console.log('error: ', _context.t0);

              case 13:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 10]]);
      }));

      function send(_x, _x2) {
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
