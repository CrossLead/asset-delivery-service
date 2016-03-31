import EmailDestination from './emailDestination';
import AWS from 'aws-sdk';
import Promise from 'bluebird';

/**
 * SESDestination @class
 * @extends {EmailDestination}
 */
export default class SESEmailDestination extends EmailDestination {

  constructor() {
    super();
    
    this.ses = new AWS.SES();
    Promise.promisifyAll(this.ses);
  }

  async send(src) {
    try {
      return await this.ses.sendEmailAsync({
        Destination: { ToAddresses: [this._toAddress] },
        Source: this._fromAddress,
        Message: {
          Body: {
            Text: {Data: src}
          },
          Subject: {
            Data: this._messageSubject
          }
        }
      });
    } catch (err) {
      console.log('error: ', err);
    }
  }

  setToAddress(addr) {
    this._toAddress = addr;
  }

  setFromAddress(addr) {
    this._fromAddress = addr;
  }

  setMessageSubject(subj) {
    this._messageSubject = subj;
  }
}
