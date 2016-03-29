
/**
 * Destination class
 * @abstract
 */
export default class Destination {

  constructor() {}

  send(src) {
    throw new TypeError('send must be implemented');
  }
}
