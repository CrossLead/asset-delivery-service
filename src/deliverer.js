import _ from 'lodash';

/**
 * @class Deliverer
 * @description
 *   Deliver emails to a destination that have the source as an attachment
 */
export default class Deliverer {

  /**
   * @param  {Source[]} [sources]
   * @param  {Destination[]} [destinations]
   */
  constructor(sources, destinations) {
    set.apply(this, ['_sources', sources]);
    set.apply(this, ['_destinations', destinations]);
  }

  /**
   * Submit the source to destinations
   * @return {Promise}
   */
  async send() {
    const promises = this._destinations.map( dest => {
      return this._sources.map( async (src) => await dest.send(src.getAssets()));
    });

    await Promise.all( _.flattenDeep(promises) );
  }

  /**
   * Set the sources collection
   * Resets the sources collection
   * @param {Source|Source[]} src
   */
  setSrc(src) {
    set.apply(this, ['_sources', src]);
  }

  /**
   * @alias setSrc
   */
  setSource(src) {
    set.apply(this, ['_sources', src]);
  }

  /**
   * Push a source to the sources collection
   * @param {Source} src
   */
  addSrc(src) {
    add.apply(this, ['_sources', src]);
  }

  /**
   * @alias addSrc
   */
  addSource(src) {
    add.apply(this, ['_sources', src]);
  }

  /**
   * Set the destinations collection
   * @param {Destination|Destination[]} dest
   */
  setDest(dest) {
    set.apply(this, ['_destinations', dest]);
  }

  /**
   * @alias setDest
   */
  setDestination(dest) {
    set.apply(this, ['_destinations', dest]);
  }

  /**
   * Add a destination to the destinations collection
   * @param {Destination} dest
   */
  addDest(dest) {
    add.apply(this, ['_destinations', dest]);
  }

  /**
   * @alias addDest
   */
  addDestination(dest) {
    add.apply(this, ['_destinations', dest]);
  }
}

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
