import global from '../global.js';
import type { CSSComment } from './CSSComment.js';

// TODO: figure out how to properly extend globalThis in a way that is compatible with both Node.js and the browser.
interface CSSStyleSheetInit extends globalThis.CSSStyleSheetInit {
  nodes: CSSComment[];
}

export class CSSStyleSheet extends global.CSSStyleSheet {
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
