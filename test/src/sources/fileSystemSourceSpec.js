import should from 'should';
import path from 'path';
import fs from 'fs';
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
      source = new FileSystemSource('foo/bar');
      (false).should.be.true;
    } catch (err) {
      should.exist(err);
    }
  });

  context('#getAssets', () => {
    beforeEach(() => {
      const file = path.join(__dirname, '../..', '/fixtures/foo.txt');
      source = new FileSystemSource(file);
    });

    it('should implement getAssets', () => {
      source.should.have.property('getAssets')
        .and.is.instanceOf(Function);
      try {
        source.getAssets();
      } catch (err) {
        should.not.exist(err);
      }
    });

    it('should return a Promise to return a ReadStream', async () => {
      source.getAssets().should.be.instanceOf(Promise);

      const test = await source.getAssets();
      test.should.be.instanceOf(fs.ReadStream);
    });

  });
});
