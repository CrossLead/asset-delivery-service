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

var _source = require('./source');

var _source2 = _interopRequireDefault(_source);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileSystemSource = function (_Source) {
  (0, _inherits3.default)(FileSystemSource, _Source);

  function FileSystemSource(path) {
    (0, _classCallCheck3.default)(this, FileSystemSource);

    var _this = (0, _possibleConstructorReturn3.default)(this, (0, _getPrototypeOf2.default)(FileSystemSource).call(this));

    var doesPathExist = false;

    try {
      doesPathExist = !!_fs2.default.statSync(path);
    } catch (err) {}

    if (!path || !doesPathExist) {
      throw new Error('file path required');
    }

    _this._path = path;
    return _this;
  }

  /**
   * Get file system assets
   * @return {Stream}
   */


  (0, _createClass3.default)(FileSystemSource, [{
    key: 'getAssets',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _fs2.default.createReadStream(this._path);

              case 2:
                return _context.abrupt('return', _context.sent);

              case 3:
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
  return FileSystemSource;
}(_source2.default);

exports.default = FileSystemSource;
//# sourceMappingURL=fileSystemSource.js.map
