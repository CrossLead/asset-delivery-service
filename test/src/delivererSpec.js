import should from 'should';
import sinon from 'sinon';
import Deliverer from '../../lib/deliverer';
import EmailDestination from '../../lib/destinations/emailDestination';
import Source from '../../lib/sources/source';

describe('----------------- Deliverer Tests -----------------', () => {
  
  let deliverer;
  const _source = {};
  const _destination = {};
  beforeEach(() => {
    deliverer = new Deliverer(_source, _destination);
  });

  const classTests = [
    { name: 'send', type: 'Function' },
    { name: 'setSrc', type: 'Function' },
    { name: 'setDest', type: 'Function' }
  ]

  classTests.forEach(test => {
    it(`should have a ${test.name} ${test.type}`, () => {
      deliverer.should.have.property(test.name)
        .and.is.a[test.type]();
    });
  });

  context('#send', () => {
    it('should call the EmailDestination#send with a Source object', () => {
      const mockDest = sinon.mock(new EmailDestination('eduncan@tapqa.com'));
      const stub = sinon.stub(new Source);
      mockDest.expects('send').calledWithExactly(stub);

      deliverer = new Deliverer(stub, [mockDest.object]);
      deliverer.send();

      mockDest.verify();
      mockDest.restore();
    });
  });
});