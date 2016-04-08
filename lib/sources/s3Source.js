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

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _source = require('./source');

var _source2 = _interopRequireDefault(_source);

var _promisify = require('../promisify');

var _promisify2 = _interopRequireDefault(_promisify);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var S3Source = function (_Source) {
  (0, _inherits3.default)(S3Source, _Source);


  /**
   * @param {String} bucketName
   * @param {Object} awsCredentials
   */

  function S3Source(bucketName, awsCredentials) {
    (0, _classCallCheck3.default)(this, S3Source);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(S3Source).call(this));

    if (!bucketName) {
      throw new Error('S3 bucket name required');
    }

    if (!awsCredentials) {
      throw new Error('AWS credentials required');
    }

    _this._bucket = bucketName;

    _this._s3 = new _awsSdk2.default.S3(_lodash2.default.assign({ params: { Bucket: _this._bucket } }, awsCredentials));
    _this._s3.listObjectsAsync = (0, _promisify2.default)(_this._s3.listObjects);
    return _this;
  }

  /**
   * Get the deliverable assets from the S3 bucket
   * @return {String[]}
   */


  (0, _createClass3.default)(S3Source, [{
    key: 'getAssets',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this2 = this;

        var objList;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._s3.listObjectsAsync();

              case 2:
                objList = _context.sent;
                return _context.abrupt('return', objList.Contents.map(function (s3Obj) {
                  return '' + _this2._s3.endpoint.href + _this2._bucket + '/' + s3Obj.Key;
                }));

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getAssets() {
        return ref.apply(this, arguments);
      }

      return getAssets;
    }()
  }]);
  return S3Source;
}(_source2.default);

exports.default = S3Source;
//# sourceMappingURL=s3Source.js.map
