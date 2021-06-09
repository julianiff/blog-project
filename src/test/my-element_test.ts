import {PageLayout} from '../template/PageLayout';

const assert = chai.assert;

suite('my-element', () => {
  test('is defined', () => {
    const el = document.createElement('iff-page-layout');
    assert.instanceOf(el, PageLayout);
  });
});
