
/**
 * @class Deliverer
 * @description
 *   Deliver emails to a destination that have the source as an attachment
 */
export default class Deliverer {

  /**
   * @param  {Source} source
   * @param  {Destination} destination
   */
  constructor(source, destination) {
    this._source = source;
    this._destination = destination;
  }

  /**
   * Submit an email to the destination
   * @return {void}
   */
  send() {

  }

  setSrc(src) {
    this._source = src;
  }

  setDest(dest) {
    this._destination = dest;
  }
}
