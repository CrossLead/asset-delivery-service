import _ from 'lodash';
import Source from './source';
import promisify from 'es6-promisify';
import AWS from 'aws-sdk';

export default class S3Source extends Source {

  /**
   * @param {String} bucketName
   * @param {Object} awsCredentials
   */
  constructor(bucketName, awsCredentials) {
    super();

    if (!bucketName) {
      throw new Error('S3 bucket name required');
    }

    if (!awsCredentials) {
      throw new Error('AWS credentials required');
    }

    this._bucket = bucketName;

    this._s3 = new AWS.S3(_.assign({ params: { Bucket: this._bucket }}, awsCredentials));
    this._s3.listObjectsAsync = promisify(this._s3.listObjects);
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
