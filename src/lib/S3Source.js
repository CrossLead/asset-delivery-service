import Source from './source';
import AWS from 'aws-sdk';
import _ from 'lodash';

export default class S3Source extends Source {

  /**
   * @param  {Object={}} config Optional config source
   */
  constructor(config={}) {
    super();

    if (!hasValidS3Env() || !hasValidConfig(config)) {
      throw new Error('AWS env not set');
    }

    this._config = _.assign(config, getS3Env());

  }
}

/**
 * Validate the S3 env properties
 * @private
 * @return {Boolean}
 */
function hasValidS3Env() {
  return process.env.AWS_BUCKET_NAME && 
         process.env.AWS_ACCESS_KEY_ID && 
         process.env.AWS_SECRET_ACCESS_KEY;
}

/**
 * Validate the config object
 * @private
 * @param  {Object} config
 * @return {Boolean}
 */
function hasValidConfig(config) {
  return config.AWS_BUCKET_NAME &&
         config.AWS_ACCESS_KEY_ID &&
         config.AWS_SECRET_ACCESS_KEY;
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
