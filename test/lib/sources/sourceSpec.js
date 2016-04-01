import Source from '../../../lib/sources/source';

describe('----------------- Source Tests -----------------', () => {

  it('#getAssets should throw if not implemented by sub-class', () => {
    const src = new Source;

    src.getAssets.should.throw();
    try {
      src.getAssets();
      (false).should.be.true();
    } catch (err) {
      (err.message === 'getAssets must be implemented').should.be.true();
    }
  });
});
