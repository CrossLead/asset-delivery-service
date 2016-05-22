import Source from './source';
import fs from 'fs';
import promisify from 'es6-promisify';

export default class FileSystemSource extends Source {

  constructor() {
    super();

    this._assetArray = [];
    this.readFileAsync = promisify(fs.readFile);
  }

  /**
   * Get file system assets
   * @return {Buffer}
   */
  getAssets(path) {
    return fs.readFileSync(path);
  }

  /**
   * Add file system assets
   */
   addAssets(path){
    let doesPathExist = false;

    try {
      doesPathExist = !!fs.statSync(path);

      if(doesPathExist){
        const filePathArr = path.split('/');

        return this._assetArray[filePathArr[filePathArr.length - 1]] = this.getAssets(path);
      }
      else{
        throw new Error('file path was not found');
      }
    } catch (err) {
      throw new Error(err);
    }
   }
}