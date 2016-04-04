'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _source = require('./source');

var _source2 = _interopRequireDefault(_source);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

class FileSystemSource extends _source2.default {

  constructor(path) {
    super();

    let doesPathExist;

    try {
      _fs2.default.accessSync(path);
      doesPathExist = true;
    } catch (err) {
      doesPathExist = false;
    }

    if (!path || !doesPathExist) {
      throw new Error('file path required');
    }

    this._path = path;
  }

  /**
   * Get file system assets
   * @return {Stream}
   */
  getAssets() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _fs2.default.createReadStream(_this._path);
    })();
  }
}
exports.default = FileSystemSource;
//# sourceMappingURL=fileSystemSource.js.map
