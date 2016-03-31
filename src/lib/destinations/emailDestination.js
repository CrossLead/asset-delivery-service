
/**
 * EmailDestination class
 * @abstract
 * @type {Destination}
 */
export default class EmailDestination {

  constructor() {}

  setToAddress(addr) {
    throw new TypeError('setToAddress must be implemented');
  }

  setFromAddress(addr) {
    throw new TypeError('setFromAddress must be implemented');
  }

  send(src) {
    throw new TypeError('send must be implemented');
  }
}
