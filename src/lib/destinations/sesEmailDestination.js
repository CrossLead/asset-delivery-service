import EmailDestination from './emailDestination';
import AWS from 'aws-sdk';
import Promise from 'bluebird';

export default class SESEmailDestination extends EmailDestination {

  constructor(emailAddress) {
    super(emailAddress);

    AWS.config.update({region:'us-east-1'});
    this.ses = new AWS.SES();
    Promise.promisifyAll(this.ses);
  }

  async send() {
    try {
      return await this.ses.sendEmailAsync({
        Destination: { ToAddresses: [this.toAddress] },
        Source: 'support@crosslead.com',
        Message: {
          Body: {
            Text: {Data: 'Hello world'}
          },
          Subject: {
            Data: 'Hello world'
          }
        }
      });
    } catch (err) {
      console.log('error: ', err);
    }
  }
}
