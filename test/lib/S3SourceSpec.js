import should from 'should';
import S3Source from '../../dist/lib/S3Source';

describe('----------------- S3Source Tests -----------------', () => {

  let S3;

  function getS3Env() {
    return {
      AWS_BUCKET_NAME: 'foo',
      AWS_ACCESS_KEY_ID: 'bar',
      AWS_SECRET_ACCESS_KEY: 'baz'
    };
  }

  function setS3Env() {
    const env = getS3Env();
    process.env.AWS_BUCKET_NAME = env.AWS_BUCKET_NAME;
    process.env.AWS_ACCESS_KEY_ID = env.AWS_ACCESS_KEY_ID;
    process.env.AWS_SECRET_ACCESS_KEY = env.AWS_SECRET_ACCESS_KEY;
  }

  context('throwable initialization', () => {
    const throwableTests = [
      { name: 'AWS_BUCKET_NAME, AWS_ACCESS_KEY_ID, or ' +
        'AWS_SECRET_ACCESS_KEY are not set on the environment',
        optionalFunction: null
      },
      {
        name: 'S3 config is not provided to the constructor',
        optionalFunction: setS3Env
      }
    ];

    throwableTests.forEach(test => {
      it(`should throw if a ${test.name}`, () => {
        try {
          if (test.optionalFunction)
            test.optionalFunction();

          new S3Source
          (false).should.be.true();
        } catch (err) {
          (err.message === 'AWS env not set').should.be.true();
        }
      });
    });
  });

  
});
