import should from 'should';
import EmailDestination from '../../../lib/destinations/emailDestination';

describe('----------------- EmailDestination Tests -----------------', () => {
  it('should throw if an email address is not provided', () => {
    try {
      new EmailDestination
    } catch (err) {
      should.exist(err);
    }
  });

  it('#send should throw if not implemented by a sub-class', async () => {
    const dest = new EmailDestination('eduncan@tapqa.com');

    try {
      await dest.send();
      (false).should.be.true();
    } catch (err) {
      (err.message === 'Send must be implemented').should.be.true();
    }
  });
});
