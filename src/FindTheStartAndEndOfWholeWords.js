"use strict";
var str = "This island is his, it is";
exports.FindTheStartAndEndOfWholeWords = {
    name: '07 - Find the Start and End of Whole Words',
    cases: [
        {
            comment: 'Let\'s capture the word "is", \\b is word boundary',
            str: str,
            regEx: /\bis\b/g
        },
        {
            comment: 'B is negation of b so this will find is that is not end of a word',
            str: str,
            regEx: /is\B/g
        }
    ]
};
//# sourceMappingURL=FindTheStartAndEndOfWholeWords.js.map