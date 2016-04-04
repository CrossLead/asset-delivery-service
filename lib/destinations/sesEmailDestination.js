'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emailDestination = require('./emailDestination');

var _emailDestination2 = _interopRequireDefault(_emailDestination);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _promisify = require('../promisify');

var _promisify2 = _interopRequireDefault(_promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * SESDestination @class
 * @extends {EmailDestination}
 */
class SESEmailDestination extends _emailDestination2.default {

  /**
   * @param {Object} awsCredentials AWS credentials config object
   */
  constructor(awsCredentials) {
    super();

    if (!awsCredentials) {
      throw new Error('AWS credentials required');
    }

    this.ses = new _awsSdk2.default.SES(awsCredentials);
    this.ses.sendEmailAsync = (0, _promisify2.default)(this.ses.SendEmail);
  }

  send(src) {
    var _this = this;

    return _asyncToGenerator(function* () {
      try {
        return yield _this.ses.sendEmailAsync({
          Destination: { ToAddresses: [_this._toAddress] },
          Source: _this._fromAddress,
          Message: {
            Body: {
              Text: { Data: src }
            },
            Subject: {
              Data: _this._messageSubject
            }
          }
        });
      } catch (err) {
        console.log('error: ', err);
      }
    })();
  }

  setToAddress(addr) {
    this._toAddress = addr;
  }

  setFromAddress(addr) {
    this._fromAddress = addr;
  }

  setMessageSubject(subj) {
    this._messageSubject = subj;
  }
}
exports.default = SESEmailDestination;
//# sourceMappingURL=sesEmailDestination.js.map
