import should from 'should';
import Destination from '../../dist/lib/destination';

describe('----------------- Destination Tests -----------------', () => {
  it('#send should throw if not implemented by a sub-class', () => {
    const dest = new Destination;

    dest.send.should.throw();
    try {
      dest.send();
      (false).should.be.true();
    } catch (err) {
      (err.message === 'send must be implemented').should.be.true();
    }
  });
});
