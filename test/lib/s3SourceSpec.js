import should from 'should';
import S3Source from '../../dist/lib/s3Source';

describe('----------------- s3Source Tests -----------------', () => {

  let S3;

  function getS3Env() {
    return {
      AWS_BUCKET_NAME: 'foo',
      AWS_ACCESS_KEY_ID: 'bar',
      AWS_SECRET_ACCESS_KEY: 'baz'
    };
  }

  afterEach(() => {
    delete process.env.AWS_BUCKET_NAME;
    delete process.env.AWS_ACCESS_KEY_ID;
    delete process.env.AWS_SECRET_ACCESS_KEY;
  });

  context('throwable initialization', () => {
    it('should throw if AWS env is not set ' + 
      'and a config object is not provided', () => {
        try {
          new S3Source
          (false).should.be.true();
        } catch (err) {
          (err.message === 'AWS env not set').should.be.true();
        }
    });
  });

  it('should set the AWS env if a config object was provided', () => {
    new S3Source(getS3Env());

    process.env.should.have.property('AWS_BUCKET_NAME');
    process.env.should.have.property('AWS_ACCESS_KEY_ID');
    process.env.should.have.property('AWS_SECRET_ACCESS_KEY');
  });

  it('should fetch the objects', () => {
    const s3 = new S3Source({ AWS_BUCKET_NAME: 'clp-test-resources', AWS_ACCESS_KEY_ID: 'foo', AWS_SECRET_ACCESS_KEY: 'bar' });

    s3.getAssets();
  });
});
