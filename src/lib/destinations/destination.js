
/**
 * @class Destination
 * @abstract
 */
export default class Destination {

  constructor() {}

  async send() {
    throw new Error('Send must be implemented');
  }
}