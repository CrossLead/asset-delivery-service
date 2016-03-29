import Source from './source';
import Promise from 'bluebird';
import AWS from 'aws-sdk';
import _ from 'lodash';

export default class S3Source extends Source {

  /**
   * @param  {Object={}} config Optional config source
   */
  constructor(config={}) {
    super();

    if (!hasValidS3Env() && !hasValidConfig(config)) {
      throw new Error('AWS env not set');
    } 

    if (!hasValidS3Env() && hasValidConfig(config)) {
      setS3Env(config);
    }

    this._config = getS3Env();


    const Bucket = this._config.AWS_BUCKET_NAME;

    this.s3 = new AWS.S3({ params: { Bucket }});
    Promise.promisifyAll(Object.getPrototypeOf(this.s3));
  }


  /**
   * Get the deliverable assets from the S3 bucket
   * @return {Asset[]}
   */
  async getAssets() {
    const objs = await this.s3.listObjectsAsync();
    console.log(objs);
  }
}

/**
 * Validate the S3 env properties
 * @private
 * @return {Boolean}
 */
function hasValidS3Env() {
  return !!process.env.AWS_BUCKET_NAME && 
         !!process.env.AWS_ACCESS_KEY_ID && 
         !!process.env.AWS_SECRET_ACCESS_KEY;
}

/**
 * Validate the config object
 * @private
 * @param  {Object} config
 * @return {Boolean}
 */
function hasValidConfig(config) {
  return !!config.AWS_BUCKET_NAME &&
         !!config.AWS_ACCESS_KEY_ID &&
         !!config.AWS_SECRET_ACCESS_KEY;
}

/**
 * Get the s3 env properties
 * @private
 * @return {Object}
 */
function getS3Env() {
  return {
    AWS_BUCKET_NAME: process.env.AWS_BUCKET_NAME,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY
  };
}

/**
 * Set the ENV if creds are provided by config object
 * @param {Object} conf
 */
function setS3Env(conf) {
  process.env.AWS_BUCKET_NAME = conf.AWS_BUCKET_NAME;
  process.env.AWS_ACCESS_KEY_ID = conf.AWS_ACCESS_KEY_ID;
  process.env.AWS_SECRET_ACCESS_KEY = conf.AWS_SECRET_ACCESS_KEY;
}
