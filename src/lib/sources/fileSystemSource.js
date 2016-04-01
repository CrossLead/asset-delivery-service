import Source from './source';
import fs from 'fs';

export default class FileSystemSource extends Source {

  constructor(path) {
    super();


    let doesPathExist;

    try {
      fs.accessSync(path);
      doesPathExist = true;
    } catch (err) {
      doesPathExist = false;
    }

    if (!path || !doesPathExist) {
      throw new Error('file path required');
    }

    this._path = path;
  }

  /**
   * Get file system assets
   * @return {Stream}
   */
  getAssets() {
    return fs.createReadStream(this._path);
  }
}