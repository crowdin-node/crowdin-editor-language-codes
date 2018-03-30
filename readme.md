# crowdin-editor-language-codes 

> A mapping of unique language codes used in Crowdin's web editor URLs

Crowdin uses a set of non-standard language codes in some of its URLs. These are different from [Crowdin Language Codes]:

![crowdin-url-example](https://user-images.githubusercontent.com/2289/38150527-2b007a96-3414-11e8-8eaf-ccd3dec732b3.png)

These "editor codes" cannot consistently be derived from [Crowdin Language Codes], and there's not currently a Crowdin API for collecting the editor codes, so this module exists to fill the gap.

Examples:

Language Code | Editor Code
------------- | -----------
zh-TW         | zhtw
pt-PT         | pt
dv            | dv

## Installation

```sh
npm install crowdin-editor-language-codes
```

## Usage

The module exports a key-value object. The keys are [Crowdin Language Codes] like `zh-TW`, and the values are objects containing the editor code.

```js
const codes = require('crowdin-editor-language-codes')
```

For more details, see [test.js](test.js) or the raw data in [codes.json](codes.json).

## Tests

```sh
npm install
npm test
```

## License

MIT

[Crowdin Language Codes]: https://support.crowdin.com/api/language-codes/