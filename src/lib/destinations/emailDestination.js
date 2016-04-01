import Destination from './destination';

/**
 * EmailDestination class
 * @abstract
 * @type {Destination}
 */
export default class EmailDestination extends Destination {

  constructor() {
    super();
  }

  setToAddress(addr) {
    throw new TypeError('setToAddress must be implemented');
  }

  setFromAddress(addr) {
    throw new TypeError('setFromAddress must be implemented');
  }
}
