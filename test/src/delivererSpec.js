import should from 'should';
import sinon from 'sinon';
import Deliverer from '../../src/deliverer';
import EmailDestination from '../../src/destinations/emailDestination';
import Source from '../../src/sources/source';
import SESEmailDestination from '../../src/destinations/sesEmailDestination';
import FileSystemSource from '../../src/sources/fileSystemSource';
import path from 'path';

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
    it('should call the EmailDestination#send with a Source object', done => {
      const mockDest = sinon.mock(new EmailDestination(process.env.AWS_EMAIL_LISTS));
      const stub = sinon.stub(new Source);
      mockDest.expects('send').calledWithExactly(stub);

      deliverer = new Deliverer(stub, [mockDest.object]);
      deliverer.send()
        .then(() => {
          mockDest.verify();
          mockDest.restore();
        })
        .then(done);
    });

    it('should send an email', function(){
      const accessKeyId = process.env.AWS_ACCESS_KEY_ID;
      const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;
      const region = 'us-east-1';

      const deliverer = new Deliverer;
      const file = new FileSystemSource;
      file.addAssets(path.join(__dirname, '../', '/fixtures/foo.txt'));
      const email = new SESEmailDestination({accessKeyId, secretAccessKey, region});

      email.setToAddress(process.env.AWS_RECIPIENT_LIST.split(','));
      email.setFromAddress(process.env.AWS_SOURCE_EMAIL);
      email.setMessageSubject(`unit test email`);

      deliverer.addDest(email);
      deliverer.addSrc(file);

      deliverer.send();
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
