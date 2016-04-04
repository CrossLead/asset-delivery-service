import EmailDestination from './emailDestination';
import AWS from 'aws-sdk';
import promisify from '../promisify';

/**
 * SESDestination @class
 * @extends {EmailDestination}
 */
export default class SESEmailDestination extends EmailDestination {

  /**
   * @param {Object} awsCredentials AWS credentials config object
   */
  constructor(awsCredentials) {
    super();

    if (!awsCredentials) {
      throw new Error('AWS credentials required');
    }
    
    this.ses = new AWS.SES(awsCredentials);
    this.ses.sendEmailAsync = promisify(this.ses.SendEmail);
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
