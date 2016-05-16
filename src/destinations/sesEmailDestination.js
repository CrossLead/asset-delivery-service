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
    this.ses.sendEmailAsync = promisify(this.ses.sendRawEmail, this.ses);
  }

  async send(src, filePath) {
    try {
      const filePathArr = filePath.split('/');
      const message = [
      'To: ' + this._toAddress,
      '\nSubject: Screenshots for ' + this._messageSubject,
      '\nContent-Type: image/png',
      '\nContent-Transfer-Encoding: base64',
      '\nContent-Disposition: inline; filename="' + filePathArr[filePathArr.length - 1] + '"',
      '\n',
      '\n' + src.toString('base64'),
      '\n'
      ];

      return await this.ses.sendEmailAsync({
        Source: this._fromAddress,
        RawMessage:{
          Data: message.join('')
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
