
/**
 * Source class
 */
export default class Source {

  constructor() {}

  async getAssets() {
    throw new TypeError('getAssets must be implemented');
  }
}
