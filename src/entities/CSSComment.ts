export type CSSCommentInlineCSSText = `/* ${string} */`;
export type CSSCommentBlockCSSText = `/**\n${string}\n */`;
export type CSSCommentCSSText = CSSCommentInlineCSSText | CSSCommentBlockCSSText;

export type CSSCommentType = 'inline' | 'block';
export interface CSSCommentOptions {
  type: CSSCommentType;
}

/**
 * A comment in a CSS stylesheet.
 */
export class CSSComment {
  static defaultOptions: CSSCommentOptions = {
    type: 'inline',
  };

  value: string;
  type: CSSCommentType;

  constructor(value: string, options: CSSCommentOptions = CSSComment.defaultOptions) {
    this.value = value;
    this.type = options.type;
  }

  get cssText(): CSSCommentCSSText {
    if (this.type === 'inline') {
      return `/* ${this.value} */`;
    }

    if (this.type === 'block') {
      // Format the value as a block comment
      const lines = this.value.split('\n');
      const indentedLines = lines.map((line) => ` * ${line}`);
      const formattedLines = indentedLines.join('\n');

      return `/**\n${formattedLines}\n */`;
    }

    throw new Error('Invalid comment type');
  }
}
