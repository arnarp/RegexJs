"use strict";
var utils_1 = require('./utils');
exports.FindPlainTextPatterns = {
    name: '01 - FindPlainTextPatterns',
    run: function (contentNode) {
        var str = "Cat sat on the hats.";
        var strWithLineBreaks = "Cat\nsat on\nthe hats.";
        var regex = /at/g;
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, undefined);
        regex = /.t/g;
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, undefined);
        regex = /.../g;
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, undefined);
        regex = /..../g;
        utils_1.createAndAppendRegexBlock(strWithLineBreaks, regex, contentNode, undefined);
        regex = /\./;
        utils_1.createAndAppendRegexBlock(str, regex, contentNode, undefined);
    }
};
//# sourceMappingURL=FindPlainTextPatterns.js.map