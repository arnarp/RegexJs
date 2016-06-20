"use strict";
var thething = 'it was the the thing thing';
var someHtml = '<b>Bold</b><i>Italics</i>';
var htmlExtractor = /<(\w+)>(.*)<\/\1>/g;
exports.MatchTheSameStringTwice = {
    name: '08 - Match the Same String Twice',
    cases: [
        {
            comment: 'Find the followed by another the',
            str: thething,
            regEx: /(the)\s?(\1)/g
        },
        {
            comment: 'Find the followed by another the but only match the first',
            str: thething,
            regEx: /(the)\s?(?=\1)/g
        },
        {
            comment: 'Find a word followed by another same word but only match the first',
            str: thething,
            regEx: /(\w+)\s?(?=\1)/g
        },
        {
            comment: "Extract content out of html:\n      " + someHtml.replace(htmlExtractor, '$2\n'),
            str: someHtml,
            regEx: htmlExtractor
        }
    ]
};
//# sourceMappingURL=MatchTheSameStringTwice.js.map