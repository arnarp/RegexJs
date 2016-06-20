"use strict";
var utils_1 = require('./utils');
exports.FindSetsOfCharacters = {
    name: '03 - FindSetsOfCharacters',
    run: function (contentNode) {
        var str = "cat mat bat Hat ?at 0at \u00F0at";
        var regex = /[cb]at/g;
        var comment = 'We create character class with [cb] that matches either b or c. Order is not important';
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, comment);
        regex = /[^cb]at/g;
        comment = "We can negate character class with ^";
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, comment);
        regex = /[a-ö]at/g;
        comment = "We can have characher ranges";
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, comment);
        regex = /[a-öA-Ö]at/g;
        comment = "We can have union of ranges";
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, comment);
    }
};
//# sourceMappingURL=FindSetsOfCharacters.js.map