
/**
 * EmailDestination class
 * @abstract
 * @type {Destination}
 */
export default class EmailDestination {

  constructor(emailAddress) {
    if (!emailAddress)
      throw new Error('Email Adress required');

    this.toAddress = emailAddress;
  }

  send(src) {
    throw new TypeError('send must be implemented');
  }
}
