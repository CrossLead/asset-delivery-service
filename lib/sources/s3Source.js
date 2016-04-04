'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _source = require('./source');

var _source2 = _interopRequireDefault(_source);

var _promisify = require('../promisify');

var _promisify2 = _interopRequireDefault(_promisify);

var _awsSdk = require('aws-sdk');

var _awsSdk2 = _interopRequireDefault(_awsSdk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

class S3Source extends _source2.default {

  /**
   * @param {String} bucketName
   * @param {Object} awsCredentials
   */
  constructor(bucketName, awsCredentials) {
    super();

    if (!bucketName) {
      throw new Error('S3 bucket name required');
    }

    if (!awsCredentials) {
      throw new Error('AWS credentials required');
    }

    this._bucket = bucketName;

    this._s3 = new _awsSdk2.default.S3(_lodash2.default.assign({ params: { Bucket: this._bucket } }, awsCredentials));
    this._s3.listObjectsAsync = (0, _promisify2.default)(this._s3.listObjects);
  }

  /**
   * Get the deliverable assets from the S3 bucket
   * @return {String[]}
   */
  getAssets() {
    var _this = this;

    return _asyncToGenerator(function* () {
      const objList = yield _this._s3.listObjectsAsync();
      return objList.Contents.map(function (s3Obj) {
        return `${ _this._s3.endpoint.href }${ _this._bucket }/${ s3Obj.Key }`;
      });
    })();
  }
}
exports.default = S3Source;
//# sourceMappingURL=s3Source.js.map
