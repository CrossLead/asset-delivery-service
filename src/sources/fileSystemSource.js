import Source from './source';
import fs from 'fs';
import promisify from 'es6-promisify';

export default class FileSystemSource extends Source {

  constructor(path) {
    super();

    let doesPathExist = false;

    try {
      doesPathExist = !!fs.statSync(path);
    } catch (err) {}

    if (!path || !doesPathExist) {
      throw new Error('file path required');
    }

    this.createReadStreamAsync = promisify(fs.createReadStream);
    this._path = path;
  }

  /**
   * Get file system assets
   * @return {Stream}
   */
  async getAssets() {
    return this.createReadStreamAsync(this._path);
  }
}