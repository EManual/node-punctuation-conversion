'use strict'

var convert = require('./index')
var assert = require('assert')

assert.equal(convert.replaceChinese('你好'), '你好')
assert.equal(convert.replaceChinese('你好！？'), '你好!?')

assert.equal(convert.replaceChinese(['！', '“', '”', '；', '《', '》', '。', '、', '，', '【', '】', '（', '）', '？', '：'].join(''))
    , ['!', '"', '"', ';', '<', '>', '.', ',', ',', '[', ']', '(', ')', '?', ':'].join(''))
    
assert.equal(convert.replaceEnglish(
    ['!', '"', '"', ';', '<', '>', '.', ',', ',', '[', ']', '(', ')', '?', ':'].join(''),
    ['！', '“', '”', '；', '《', '》', '。', '、', '，', '【', '】', '（', '）', '？', '：'].join('')
))


