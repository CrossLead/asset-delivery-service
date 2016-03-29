
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
    this._sources = sources instanceof Array 
            ? sources : [sources];

    this._destinations = destinations instanceof Array 
                 ? destinations : [destinations];
  }

  /**
   * Submit the source to destinations
   * @return {void}
   */
  send() {
    this._destinations.forEach(dest => {
      this._sources.forEach(src => dest.send(src));
    });
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
    this._sources.push(src)
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
