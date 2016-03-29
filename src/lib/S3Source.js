import Source from './source';

export default class S3Source extends Source {

  /**
   * @param  {Object={}} config Optional config source
   */
  constructor(config={}) {
    super();

    this._bucketName = process.env.S3_BUCKET_NAME || config.bucketName;

    if (!this._bucketName) {
      throw new TypeError('S3 ENV not set');
    }
  }


}
