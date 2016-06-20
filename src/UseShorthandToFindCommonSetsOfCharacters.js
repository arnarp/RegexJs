"use strict";
exports.UseShorthandToFindCommonSetsOfCharacters = {
    name: '04 - UseShorthandToFindCommonSetsOfCharacters',
    cases: [
        {
            str: "Aeiou $100 55.5% \u00F0",
            regEx: /[a-öA-Ö0-9]/g,
            comment: 'Match all alpa numeric characters'
        },
        {
            str: "Aeiou $100 55.5% \u00F0",
            regEx: /\w/g,
            comment: 'Shorthand version of above, except doesn match Icelandic characters'
        },
        {
            str: "Aeiou $100 55.5% \u00F0",
            regEx: /\d/g,
            comment: 'Shorthand for only digits'
        },
        {
            str: "Aeiou $100 55.5% \u00F0",
            regEx: /\s/g,
            comment: 'Shorthand for only whitespace'
        }
    ]
};
//# sourceMappingURL=UseShorthandToFindCommonSetsOfCharacters.js.map