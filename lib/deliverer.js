"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

/**
 * @class Deliverer
 * @description
 *   Deliver emails to a destination that have the source as an attachment
 */
class Deliverer {

  /**
   * @param  {Source[]} [sources]
   * @param  {Destination[]} [destinations]
   */
  constructor(sources, destinations) {
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
  send() {
    var _this = this;

    return _asyncToGenerator(function* () {
      return yield _this._destinations.forEach(function (dest) {
        _this._sources.forEach(function (src) {
          return dest.send(src);
        });
      });
    })();
  }

  /**
   * Set the sources collection
   * Resets the sources collection
   * @param {Source|Source[]} src
   */
  setSrc(src) {
    if (src instanceof Array) {
      this._sources = src;
    } else {
      this._sources = [src];
    }
  }

  addSrc(src) {
    this._sources.push(src);
  }

  /**
   * Set the destinations collection
   * @param {Destination|Destination[]} dest
   */
  setDest(dest) {
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
  addDest(dest) {
    this._destination.push(dest);
  }
}
exports.default = Deliverer;
//# sourceMappingURL=deliverer.js.map
