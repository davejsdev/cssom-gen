import { describe, expect, it } from 'vitest';
import { CSSComment } from '../CSSComment';
import { CSSStyleSheet } from '../CSSStyleSheet';

describe('CSSStyleSheet', () => {
  it('should create a stylesheet', () => {
    const stylesheet = new CSSStyleSheet({ nodes: [] });
    expect(stylesheet.cssText).toBe('\n');
  });

  it.each([[[]], [[new CSSComment('This is a block comment', { type: 'block' })]]])(
    'always ends with a single blank newline',
    (nodes) => {
      const stylesheet = new CSSStyleSheet({ nodes });
      expect(stylesheet.cssText.endsWith('\n')).toBe(true);
      expect(stylesheet.cssText.endsWith('\n\n')).toBe(false);
    },
  );

  it('should create a stylesheet with a comment', () => {
    const stylesheet = new CSSStyleSheet({ nodes: [] });
    const comment = new CSSComment('This is a block comment', { type: 'block' });
    stylesheet.append(comment);
    expect(stylesheet.cssText).toMatchSnapshot();
  });
});
