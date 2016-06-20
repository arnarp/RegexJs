"use strict";
var str = "foo\nfoobar\nfoobaz\nfooboo";
var phoneNumbers = "800-455-7823\n(555) 456-8989\n4568938989";
var areaCodeRegex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;
exports.FindGroupsOfCharacters = {
    name: '05 - Find Groups of Characters',
    cases: [
        {
            str: str,
            regEx: /foo(bar|boo)/g,
            comment: 'We create groups with parenthesis'
        },
        {
            str: str,
            regEx: /foo(bar|boo)?/g,
            comment: 'We can add quantifier to the group'
        },
        {
            str: str,
            regEx: /foo(bar|boo)/g,
            comment: "We can reference the capture group\nstr.replace(/foo(bar|boo)/g, '**$1**')\n" + str.replace(/foo(bar|boo)/g, '**$1**')
        },
        {
            str: phoneNumbers,
            regEx: areaCodeRegex,
            comment: "Let's extract area codes from phone numbers\n" + phoneNumbers.replace(areaCodeRegex, 'area code: $1')
        }
    ]
};
//# sourceMappingURL=FindGroupsOfCharacters.js.map