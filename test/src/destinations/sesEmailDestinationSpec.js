import should from 'should';
import sinon from 'sinon';
import SESEmailDestination from '../../../src/destinations/sesEmailDestination';

describe('----------------- SESEmailDestination Tests -----------------', () => {
  it('should throw if an emailAddress is not provided', () => {
    try {
      new SESEmailDestination();
    } catch (err) {
      should.exist(err.message);
    }
  });

  context('#send', () => {
    let email,
      responseObj = { ResponseMetadata: { RequestId: 'foo' }, MessageId: 'bar' };

    beforeEach(() => {
      email = new SESEmailDestination(process.env.AWS_SOURCE_EMAIL);
      email.ses.sendEmailAsync = sinon.stub();
      email.ses.sendEmailAsync.returns(responseObj);
    });

    afterEach(() => {
      email.ses.sendEmailAsync.reset();
    });


    it('should implement #send', async () => {
      try {
        await email.send([], 'filePath');
      } catch (err) {
        should.not.exist(err);
      }
    });

    it('should return a Response object', async () => {
      const test = await email.send([], 'filePath');

      test.should.be.instanceOf(Object)
        .and.have.property('ResponseMetadata');
    });
  });
});
