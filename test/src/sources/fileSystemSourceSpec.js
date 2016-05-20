import should from 'should';
import path from 'path';
import FileSystemSource from '../../../src/sources/fileSystemSource';

describe('----------------- FileSystemSource Tests -----------------', () => {

  let source;
  it('should throw an error if a file path is not provided', () => {
    try {
      source = new FileSystemSource;
      (false).should.be.true;
    } catch (err) {
      should.exist(err);
    }
  });

  it('should throw an error if the path does not exist', () => {
    try {
      source = new FileSystemSource;
      source.addAssets('foo/bar');
      (false).should.be.true;
    } catch (err) {
      should.exist(err);
    }
  });

  context('#getAssets', () => {
    beforeEach(() => {
      source = new FileSystemSource;
    });

    it('should implement getAssets', () => {
      const file = path.join(__dirname, '../..', '/fixtures/foo.txt');
      source.should.have.property('getAssets')
        .and.is.instanceOf(Function);
      try {
        source.getAssets(file);
      } catch (err) {
        should.not.exist(err);
      }
    });

    it('should implement addAssets', () => {
      const file = path.join(__dirname, '../..', '/fixtures/foo.txt');
      source.should.have.property('addAssets')
        .and.is.instanceOf(Function);
      try {
        source.addAssets(file);
      } catch (err) {
        should.not.exist(err);
      }
    });

    it('should return a Buffer', () => {
      source.getAssets(path.join(__dirname, '../..', '/fixtures/foo.txt')).should.be.instanceOf(Buffer);
    });

  });
});
