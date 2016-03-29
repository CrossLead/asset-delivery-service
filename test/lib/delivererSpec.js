import should from 'should';
import sinon from 'sinon';
import Deliverer from '../../dist/lib/deliverer';
import Destination from '../../dist/lib/destination';
import Source from '../../dist/lib/source';

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
    it('should call the Destination#send with a Source object', () => {
      const mockDest = sinon.mock(new Destination);
      const stub = sinon.stub(new Source);
      mockDest.expects('send').calledWithExactly(stub);

      deliverer = new Deliverer(stub, [mockDest.object]);
      deliverer.send();

      mockDest.verify();
      mockDest.restore();
    });
  });
});
