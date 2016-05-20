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

var _source = require('./source');

var _source2 = _interopRequireDefault(_source);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _es6Promisify = require('es6-promisify');

var _es6Promisify2 = _interopRequireDefault(_es6Promisify);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileSystemSource = function (_Source) {
  (0, _inherits3.default)(FileSystemSource, _Source);

  function FileSystemSource() {
    (0, _classCallCheck3.default)(this, FileSystemSource);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FileSystemSource).call(this));

    _this._assetArray = [];
    _this.readFileAsync = (0, _es6Promisify2.default)(_fs2.default.readFile);
    return _this;
  }

  /**
   * Get file system assets
   * @return {Buffer}
   */


  (0, _createClass3.default)(FileSystemSource, [{
    key: 'getAssets',
    value: function getAssets(path) {
      return _fs2.default.readFileSync(path);
    }

    /**
     * Add file system assets
     */

  }, {
    key: 'addAssets',
    value: function addAssets(path) {
      var doesPathExist = false;

      try {
        doesPathExist = !!_fs2.default.statSync(path);

        if (doesPathExist) {
          var filePathArr = path.split('/');

          return this._assetArray[filePathArr[filePathArr.length - 1]] = this.getAssets(path);
        } else {
          throw new Error('file path was not found');
        }
      } catch (err) {
        throw new Error(err);
      }
    }
  }]);
  return FileSystemSource;
}(_source2.default);

exports.default = FileSystemSource;
//# sourceMappingURL=fileSystemSource.js.map
