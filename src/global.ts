// biome-ignore lint/suspicious/noTsIgnore: no types available for this package
// @ts-ignore-next-line no-restricted-globals
import Window from 'window';

// TODO: figure out how to properly extend globalThis in a way that is compatible with both Node.js and the browser.
const global: typeof globalThis = new Window();

export default global;
