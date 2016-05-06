import EmailDestination from './emailDestination';
import AWS from 'aws-sdk';
import promisify from 'es6-promisify';

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
    this.ses.sendEmailAsync = promisify(this.ses.sendEmail, this.ses);
  }

  async send(src) {
    try {
      return await this.ses.sendEmailAsync({
        Destination: { ToAddresses: [this._toAddress] },
        Source: this._fromAddress,
        Message: {
          Body: {
            Text: {Data: 'hello world'}
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
