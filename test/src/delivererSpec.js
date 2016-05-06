import should from 'should';
import sinon from 'sinon';
import Deliverer from '../../src/deliverer';
import EmailDestination from '../../src/destinations/emailDestination';
import Source from '../../src/sources/source';

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

  context('#setSrc', () => {
    it('should reset this._sources', () => {
      const testSources = [{test: 1}, {test: 2}];
      deliverer._sources = testSources;
      deliverer._sources.should.equal(testSources);

      const testSetter = {test: 'setter'};
      deliverer.setSrc(testSetter);
      deliverer._sources.should.deepEqual([testSetter]);
    });

    it('should set this._sources to an array if one isn`t given', () => {
      deliverer.setSrc({test: 'object'});
      deliverer._sources.should.be.instanceOf(Array);
    });

    it('should have an alias #setSource', () => {
      deliverer.should.have.property('setSource')
        .and.is.instanceOf(Function);
    });
  });

  const testObject = {test: 'object'};
  context('#addSrc', () => {   
    it('should push a source object to this._sources', () => {
      deliverer = new Deliverer;
      deliverer.addSrc(testObject);
      deliverer._sources.should.deepEqual([testObject]);
    });

    it('should not remove existing sources', () => {
      deliverer.addSrc(testObject);
      deliverer._sources.should.deepEqual([{}, testObject]);
    });

    it('should have an alias #addSource', () => {
      deliverer.should.have.property('addSource')
        .and.is.instanceOf(Function);
    });
  });

  context('#addDest', () => {
    it('should push a destination object to this._destinations', () => {
      deliverer = new Deliverer;
      deliverer.addDest(testObject);
      deliverer._destinations.should.deepEqual([testObject]);
    });

    it('should not remove existing destinations', () => {
      deliverer.addDest(testObject);
      deliverer._destinations.should.deepEqual([{}, testObject]);
    });

    it('should have an alias #addDestination', () => {
      deliverer.should.have.property('addDestination')
        .and.is.instanceOf(Function);
    });
  });

  context('#setDest', () => {
    it('should reset this._destinations', () => {
      const testDestinations = [{test: 1}, {test: 2}];
      deliverer._destinations = testDestinations;
      deliverer._destinations.should.equal(testDestinations);

      const testSetter = {test: 'setter'};
      deliverer.setDest(testSetter);
      deliverer._destinations.should.deepEqual([testSetter]);
    });

    it('should set this._destinations to an array if one isn`t given', () => {
      deliverer.setDest({test: 'object'});
      deliverer._destinations.should.be.instanceOf(Array);
    });

    it('should have an alias #setDestination', () => {
      deliverer.should.have.property('setDestination')
        .and.is.instanceOf(Function);
    });
  });
});
