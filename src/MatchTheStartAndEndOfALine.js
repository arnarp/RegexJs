"use strict";
exports.MatchTheStartAndEndOfALine = {
    name: '09 - Match the Start and End of a Line',
    cases: [
        {
            comment: 'Outside of character group ^ means beginning of line',
            str: "12/1/16 12-16-13",
            regEx: /^12/g
        },
        {
            comment: 'If we split the string into two lines the expectation is that we\'ll match both lines, but that\'t not the reality. It wont match after a linebreak',
            str: "12/1/16\n12-16-13",
            regEx: /^12/g
        },
        {
            comment: 'This is solved by the m flag. It stands for multiline.',
            str: "12/1/16\n12-16-13",
            regEx: /^12/gm
        },
        {
            comment: 'Let\'s match a line that begins with 12 and ends with 16. The $ sign will do that for us',
            str: "12/1/16\n12-16-13\n12-06-2016",
            regEx: /^12.+16$/gm
        }
    ]
};
//# sourceMappingURL=MatchTheStartAndEndOfALine.js.map