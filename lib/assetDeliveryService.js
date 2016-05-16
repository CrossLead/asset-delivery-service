'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.S3Destination = exports.SESEmailDestination = exports.FileSystemSource = exports.S3Source = exports.Deliverer = undefined;

var _deliverer = require('./deliverer');

var _deliverer2 = _interopRequireDefault(_deliverer);

var _s3Source = require('./sources/s3Source');

var _s3Source2 = _interopRequireDefault(_s3Source);

var _fileSystemSource = require('./sources/fileSystemSource');

var _fileSystemSource2 = _interopRequireDefault(_fileSystemSource);

var _sesEmailDestination = require('./destinations/sesEmailDestination');

var _sesEmailDestination2 = _interopRequireDefault(_sesEmailDestination);

var _s3Destination = require('./destinations/s3Destination');

var _s3Destination2 = _interopRequireDefault(_s3Destination);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  Deliverer: _deliverer2.default,
  S3Source: _s3Source2.default,
  FileSystemSource: _fileSystemSource2.default,
  SESEmailDestination: _sesEmailDestination2.default,
  S3Destination: _s3Destination2.default
};
exports.Deliverer = _deliverer2.default;
exports.S3Source = _s3Source2.default;
exports.FileSystemSource = _fileSystemSource2.default;
exports.SESEmailDestination = _sesEmailDestination2.default;
exports.S3Destination = _s3Destination2.default;


var deliverer = new _deliverer2.default();
//# sourceMappingURL=assetDeliveryService.js.map
