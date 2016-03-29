import should from 'should';
import Deliverer from '../../dist/lib/deliverer';

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
});
