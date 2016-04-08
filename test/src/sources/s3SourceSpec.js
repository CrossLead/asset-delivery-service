import should from 'should';
import sinon from 'sinon';
import AWS from 'aws-sdk';
import S3Source from '../../../src/sources/s3Source';

describe('----------------- s3Source Tests -----------------', () => {

  let S3;

  const listObjectsResponse = {IsTruncated:false,Marker:'',Contents:[{Key:'20160324-85/OSX_ElCapitan-chrome_49.png',LastModified:'ThuMar24201613:51:54GMT-0500(CDT)',ETag:'"fc602ac4fb29ccb5ba1b500f1a7c3f5f"',Size:320589,StorageClass:'STANDARD'}],Name:'clp-test-resources',Prefix:'',MaxKeys:1000,CommonPrefixes:[]};

  afterEach(() => {
    delete process.env.AWS_ACCESS_KEY_ID;
    delete process.env.AWS_SECRET_ACCESS_KEY;
  });

  context('throwable initialization', () => {
    it('should throw if S3 bucket name is not provided' + 
      'and a config object is not provided', () => {
        try {
          new S3Source
          (false).should.be.true();
        } catch (err) {
          should.exist(err);
        }
    });
  });

  context('#getAssets', () => {
    let listObjectsAsyncStub, s3,
      AWS_CREDS = {};

    beforeEach(() => {
      listObjectsAsyncStub = sinon.stub();
      s3 = new S3Source('clp-test-resources', AWS_CREDS);
      s3._s3.listObjectsAsync = listObjectsAsyncStub;
      s3._s3.listObjectsAsync.returns(listObjectsResponse);
    });

    afterEach(() => {
      s3._s3.listObjectsAsync.reset();
    });

    it('should return an array of asset URIs', async () => {
      const assets = await s3.getAssets();
      assets.should.be.instanceOf(Array);
    });
  });
});

function getS3Env() {
  return {
    AWS_ACCESS_KEY_ID: 'bar',
    AWS_SECRET_ACCESS_KEY: 'baz'
  };
}
