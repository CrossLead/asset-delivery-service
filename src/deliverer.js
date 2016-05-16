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
    set.call(this, '_sources', sources);
    set.call(this, '_destinations', destinations);
  }

  /**
   * Submit the source to destinations
   * @return {Promise}
   */
  async send() {
    const promises = this._destinations.map( dest => {
      return this._sources.map( async (src) => {
        const assets = await src.getAssets();
        const filePath = src._path;
        await dest.send(assets, filePath);
      })
    });

   return await Promise.all( _.flattenDeep(promises) );
  }

  /**
   * Set the sources collection
   * Resets the sources collection
   * @param {Source|Source[]} src
   */
  setSrc(src) {
    set.call(this, '_sources', src);
  }

  /**
   * @alias setSrc
   */
  setSource(src) {
    set.call(this, '_sources', src);
  }

  /**
   * Push a source to the sources collection
   * @param {Source} src
   */
  addSrc(src) {
    add.call(this, '_sources', src);
  }

  /**
   * @alias addSrc
   */
  addSource(src) {
    add.call(this, '_sources', src);
  }

  /**
   * Set the destinations collection
   * @param {Destination|Destination[]} dest
   */
  setDest(dest) {
    set.call(this, '_destinations', dest);
  }

  /**
   * @alias setDest
   */
  setDestination(dest) {
    set.call(this, '_destinations', dest);
  }

  /**
   * Add a destination to the destinations collection
   * @param {Destination} dest
   */
  addDest(dest) {
    add.call(this, '_destinations', dest);
  }

  /**
   * @alias addDest
   */
  addDestination(dest) {
    add.call(this, '_destinations', dest);
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
