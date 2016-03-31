import Source from './source';
import Promise from 'bluebird';
import AWS from 'aws-sdk';

export default class S3Source extends Source {

  /**
   * @param  {String] bucketName
   */
  constructor(bucketName) {
    super();

    if (!bucketName) {
      throw new Error('S3 bucket name required');
    }

    this._bucket = bucketName;

    this._s3 = new AWS.S3({ params: { Bucket: this._bucket }});
    Promise.promisifyAll(Object.getPrototypeOf(this._s3));
  }

  /**
   * Get the deliverable assets from the S3 bucket
   * @return {String[]}
   */
  async getAssets() {
    const objList = await this._s3.listObjectsAsync();
    return objList.Contents.map(s3Obj => {
      return `${this._s3.endpoint.href}${this._bucket}/${s3Obj.Key}`;
    });
  }
}

/**
 * Validate the S3 env properties
 * @private
 * @return {Boolean}
 */
function hasValidS3Env() {
  return !!process.env.AWS_ACCESS_KEY_ID && 
         !!process.env.AWS_SECRET_ACCESS_KEY;
}
