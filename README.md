# cssom-gen

A library for programmatically generating CSS using the W3C CSSOM standard as a base.

## Usage

### Setup

```sh
npm i cssom-gen
```

### Environments

This library is intended to work in both in Node.js and the browser.

### Examples

_TODO..._

## API

_TODO..._

Get the [accessible name and description](https://www.w3.org/TR/html-aam-1.0/#accessible-name-and-description-computation) for an HTML element.

```ts
const el = document.querySelector('input');
getAccNameAndDescription(el);
// { name: "My Input", description: undefined }
```

> [!NOTE]
> There are limitations in Node.js with complex accessible name calculation such as `aria-labelledby`. But simple calculations like `aria-label` are well-supported.

## Reference

_TODO..._

## About

### Project Goals

Provide an easy way to programmatically generate CSS using the CSSOM standard with confidence in the validity of the output.
