'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

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

    set.call(this, '_sources', sources);
    set.call(this, '_destinations', destinations);
  }

  /**
   * Submit the source to destinations
   * @return {Promise}
   */


  (0, _createClass3.default)(Deliverer, [{
    key: 'send',
    value: function () {
      var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee2() {
        var _this = this;

        var promises;
        return _regenerator2.default.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                promises = this._destinations.map(function (dest) {
                  return _this._sources.map(function () {
                    var ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(src) {
                      return _regenerator2.default.wrap(function _callee$(_context) {
                        while (1) {
                          switch (_context.prev = _context.next) {
                            case 0:
                              dest.send(src._assetArray, src);

                            case 1:
                            case 'end':
                              return _context.stop();
                          }
                        }
                      }, _callee, _this);
                    }));
                    return function (_x) {
                      return ref.apply(this, arguments);
                    };
                  }());
                });
                return _context2.abrupt('return', _promise2.default.all(_lodash2.default.flattenDeep(promises)));

              case 2:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, this);
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
    key: 'setSrc',
    value: function setSrc(src) {
      set.call(this, '_sources', src);
    }

    /**
     * @alias setSrc
     */

  }, {
    key: 'setSource',
    value: function setSource(src) {
      set.call(this, '_sources', src);
    }

    /**
     * Push a source to the sources collection
     * @param {Source} src
     */

  }, {
    key: 'addSrc',
    value: function addSrc(src) {
      add.call(this, '_sources', src);
    }

    /**
     * @alias addSrc
     */

  }, {
    key: 'addSource',
    value: function addSource(src) {
      add.call(this, '_sources', src);
    }

    /**
     * Set the destinations collection
     * @param {Destination|Destination[]} dest
     */

  }, {
    key: 'setDest',
    value: function setDest(dest) {
      set.call(this, '_destinations', dest);
    }

    /**
     * @alias setDest
     */

  }, {
    key: 'setDestination',
    value: function setDestination(dest) {
      set.call(this, '_destinations', dest);
    }

    /**
     * Add a destination to the destinations collection
     * @param {Destination} dest
     */

  }, {
    key: 'addDest',
    value: function addDest(dest) {
      add.call(this, '_destinations', dest);
    }

    /**
     * @alias addDest
     */

  }, {
    key: 'addDestination',
    value: function addDestination(dest) {
      add.call(this, '_destinations', dest);
    }
  }]);
  return Deliverer;
}();

exports.default = Deliverer;


function set(type, data) {
  if (data instanceof Array) {
    this[type] = data;
  } else {
    this[type] = data ? [data] : [];
  }
}

function add(type, data) {
  this[type].push(data);
}
//# sourceMappingURL=deliverer.js.map
