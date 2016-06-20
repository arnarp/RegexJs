"use strict";
var str = "foo\nfoobar\nfoobaz\nfooboo";
exports.FindAStringThatPrecedesAnotherString = {
    name: '06 - Find a String That Precedes Another String',
    cases: [
        {
            comment: 'We can use a lookahead (positive lookahead) to find foo followed by bar or boo',
            str: str,
            regEx: /foo(?=bar|boo)/g
        },
        {
            comment: 'We can use negative lookahead to find foo not followed by bar or boo',
            str: str,
            regEx: /foo(?!bar|boo)/g
        }
    ]
};
//# sourceMappingURL=FindAStringThatPrecedesAnotherString.js.map