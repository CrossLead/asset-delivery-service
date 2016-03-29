
/**
 * @class Deliverer
 * @description
 *   Deliver emails to a destination that have the source as an attachment
 */
export default class Deliverer {

  /**
   * @param  {Source} [source]
   * @param  {Destination} [destination]
   */
  constructor(source, destination) {
    this._source = source;
    this._destination = destination;
  }

  /**
   * Submit the source to a destination
   * @return {void}
   */
  send() {
    this._destination.send(this._source);
  }

  setSrc(src) {
    this._source = src;
  }

  setDest(dest) {
    this._destination = dest;
  }
}
