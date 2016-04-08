"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require("babel-runtime/helpers/classCallCheck");

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require("babel-runtime/helpers/createClass");

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * @class Deliverer
 * @description
 *   Deliver emails to a destination that have the source as an attachment
 */

var Deliverer = function () {

  /**
   * @param  {Source[]} [sources]
   * @param  {Destination[]} [destinations]
   */

  function Deliverer(sources, destinations) {
    (0, _classCallCheck3.default)(this, Deliverer);

    if (sources) {
      this._sources = sources instanceof Array ? sources : [sources];
    } else {
      this._sources = [];
    }

    if (destinations) {
      this._destinations = destinations instanceof Array ? destinations : [destinations];
    } else {
      this._destinations = [];
    }
  }

  /**
   * Submit the source to destinations
   * @return {Promise}
   */


  (0, _createClass3.default)(Deliverer, [{
    key: "send",
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var _this = this;

        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this._destinations.forEach(function (dest) {
                  _this._sources.forEach(function (src) {
                    return dest.send(src);
                  });
                });

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function send() {
        return ref.apply(this, arguments);
      }

      return send;
    }()

    /**
     * Set the sources collection
     * Resets the sources collection
     * @param {Source|Source[]} src
     */

  }, {
    key: "setSrc",
    value: function setSrc(src) {
      if (src instanceof Array) {
        this._sources = src;
      } else {
        this._sources = [src];
      }
    }
  }, {
    key: "addSrc",
    value: function addSrc(src) {
      this._sources.push(src);
    }

    /**
     * Set the destinations collection
     * @param {Destination|Destination[]} dest
     */

  }, {
    key: "setDest",
    value: function setDest(dest) {
      if (dest instanceof Array) {
        this._destination = dest;
      } else {
        this._destinations = [dest];
      }
    }

    /**
     * Add a destination to the destinations collection
     * @param {Destination} dest
     */

  }, {
    key: "addDest",
    value: function addDest(dest) {
      this._destination.push(dest);
    }
  }]);
  return Deliverer;
}();

exports.default = Deliverer;
//# sourceMappingURL=deliverer.js.map
