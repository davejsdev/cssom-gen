import { describe, expect, it } from 'vitest';
import { CSSComment } from '../CSSComment.js';

describe('CSSComment', () => {
  it('should create a comment', () => {
    const comment = new CSSComment('This is a comment');
    expect(comment.cssText).toMatchSnapshot();
  });
  it('should create a block comment', () => {
    const comment = new CSSComment('This is a comment', { type: 'block' });
    expect(comment.cssText).toMatchSnapshot();
  });
});
