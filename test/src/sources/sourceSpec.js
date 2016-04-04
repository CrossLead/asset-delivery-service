import Source from '../../../lib/sources/source';

describe('----------------- Source Tests -----------------', () => {

  it('#getAssets should throw if not implemented by sub-class', async () => {
    const src = new Source;

    try {
      await src.getAssets();
      (false).should.be.true();
    } catch (err) {
      (err.message === 'getAssets must be implemented').should.be.true();
    }
  });
});
