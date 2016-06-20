"use strict";
exports.createAndAppendRegexBlock = function (str, regex, contentNode, comment) {
    if (comment != undefined) {
        var commentNode = document.createElement('pre');
        commentNode.innerHTML = comment;
        contentNode.appendChild(commentNode);
    }
    var regExNode = document.createElement('pre');
    regExNode.innerHTML = regExToString(regex);
    contentNode.appendChild(regExNode);
    var textNode = document.createElement('pre');
    contentNode.appendChild(textNode);
    output(str, regex, textNode);
    contentNode.appendChild(document.createElement('hr'));
};
var output = function (str, regex, target) {
    target.innerHTML =
        str.replace(regex, function (str) { return ("<span>" + str + "</span>"); });
};
var regExToString = function (regex) {
    return "RegEx: " + regex.source + ", global: " + regex.global + ", ignoreCase: " + regex.ignoreCase + ", multiLine: " + regex.multiline;
};
//# sourceMappingURL=utils.js.map