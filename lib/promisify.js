"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (original, settings) {
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const multipleArguments = settings && settings.multiArgs;

    let _promisified = undefined;
    if (settings && settings.thisArg) {
      _promisified = settings.thisArg;
    } else if (settings) {
      _promisified = settings;
    }

    return new Promise((resolve, reject) => {
      args.push(function (err) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        if (err) {
          return reject(err);
        };

        if (false === !!multipleArguments) {
          return resolve(args[0]);
        }

        resolve(args);
      });

      original.apply(_promisified, args);
    });
  };
};
//# sourceMappingURL=promisify.js.map
