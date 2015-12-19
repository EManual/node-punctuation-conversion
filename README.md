# node-punctuation-conversion
中英文标点互换

## example

```js
var convert = require('node-punctuation-conversion')
var assert = require('assert')

assert.equal(convert.replaceChinese('你好'), '你好')
assert.equal(convert.replaceChinese('你好！？'), '你好!?')
```
