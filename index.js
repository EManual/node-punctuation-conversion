'use strict'

var ChinesePunction = ['！', '“', '”', '；', '《', '》', '。', '、', '，', '【', '】', '（', '）', '？', '：']
var EnglishPunction = ['!', '"', '"', ';', '<', '>', '.', ',', ',', '[', ']', '(', ')', '?', ':']

var replaceChinese = function(content) {
    ChinesePunction.forEach(function(ele, index) {
        content = content.replace(ele, EnglishPunction[index])
    })
    return content
}

var replaceEnglish = function(content) {
    EnglishPunction.forEach(function(ele, index) {
        content = content.replace(ele, ChinesePunction[index])
    })

    return
}

module.exports = {
    replaceChinese: replaceChinese,
    replaceEnglish: replaceEnglish
}
