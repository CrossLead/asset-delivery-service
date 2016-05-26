"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require("babel-runtime/core-js/promise");

var _promise2 = _interopRequireDefault(_promise);

exports.default = function (original, settings) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var multipleArguments = settings && settings.multiArgs;

    var _promisified = undefined;
    if (settings && settings.thisArg) {
      _promisified = settings.thisArg;
    } else if (settings) {
      _promisified = settings;
    }

    return new _promise2.default(function (resolve, reject) {
      args.push(function (err) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        if (err) {
          return reject(err);
        };

        if (!multipleArguments) {
          return resolve(args[0]);
        }

        resolve(args);
      });

      original.apply(_promisified, args);
    });
  };
};

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//# sourceMappingURL=promisify.js.map
