
/**
 * Destination class
 * @abstract
 */
export default class Destination {

  constructor() {}

  send() {
    throw new TypeError('send must be implemented');
  }
}
