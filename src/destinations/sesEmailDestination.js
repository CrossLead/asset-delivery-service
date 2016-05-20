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

  async send(assetArray, src) {
    try {
      const message = ['To: ' + this._toAddress];
      (process.env.TRAVIS_COMMIT != undefined) ? message.push('\nSubject: Commit ' + process.env.TRAVIS_COMMIT) :  message.push('\nSubject: ' + this._messageSubject);
      message.push('\nContent-Type: multipart/mixed; boundary="simple boundary"');

      for(var element in assetArray) {
        const filePathArr = element.split('/');
        message.push('\n');
        message.push('\n--simple boundary');
        message.push('\nContent-Type: image/png');
        message.push('\nContent-Transfer-Encoding: base64');
        message.push('\nContent-Disposition: inline; filename="' + filePathArr[filePathArr.length - 1] + '"');
        message.push('\n');
        message.push('\n' + assetArray[element].toString('base64'));
        message.push('\n');
      }

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
