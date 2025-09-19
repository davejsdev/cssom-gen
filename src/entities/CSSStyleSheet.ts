// biome-ignore lint/suspicious/noTsIgnore: no types available for this package
// @ts-ignore-next-line no-restricted-globals
import Window from 'window';
import type { CSSComment } from './CSSComment';

const window = new Window();

interface CSSStyleSheetInit extends Window.CSSStyleSheetInit {
  nodes: CSSComment[];
}

export class CSSStyleSheet extends window.CSSStyleSheet {
  nodes: CSSComment[];

  constructor(options: CSSStyleSheetInit) {
    super(options);

    this.nodes = options.nodes || [];
  }

  append(node: CSSComment) {
    this.nodes.push(node);
  }

  remove(node: CSSComment) {
    this.nodes = this.nodes.filter((n) => n !== node);
  }

  get cssText() {
    return `${this.nodes.map((node) => node.cssText).join('\n\n')}\n`;
  }
}
