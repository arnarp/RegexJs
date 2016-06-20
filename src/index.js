"use strict";
if (process.env.NODE_ENV !== 'production') {
    require('./index.html');
}
if (module.hot) {
    module.hot.accept();
}
require('./index.css');
var utils_1 = require('./utils');
var Introduction_1 = require('./Introduction');
var FindPlainTextPatterns_1 = require('./FindPlainTextPatterns');
var FindRepeatedPatterns_1 = require('./FindRepeatedPatterns');
var FindSetsOfCharacters_1 = require('./FindSetsOfCharacters');
var UseShorthandToFindCommonSetsOfCharacters_1 = require('./UseShorthandToFindCommonSetsOfCharacters');
var FindGroupsOfCharacters_1 = require('./FindGroupsOfCharacters');
var FindAStringThatPrecedesAnotherString_1 = require('./FindAStringThatPrecedesAnotherString');
var FindTheStartAndEndOfWholeWords_1 = require('./FindTheStartAndEndOfWholeWords');
var MatchTheSameStringTwice_1 = require('./MatchTheSameStringTwice');
var lessons = [
    Introduction_1.Introduction,
    FindPlainTextPatterns_1.FindPlainTextPatterns,
    FindRepeatedPatterns_1.FindRepeatedPatterns,
    FindSetsOfCharacters_1.FindSetsOfCharacters,
    UseShorthandToFindCommonSetsOfCharacters_1.UseShorthandToFindCommonSetsOfCharacters,
    FindGroupsOfCharacters_1.FindGroupsOfCharacters,
    FindAStringThatPrecedesAnotherString_1.FindAStringThatPrecedesAnotherString,
    FindTheStartAndEndOfWholeWords_1.FindTheStartAndEndOfWholeWords,
    MatchTheSameStringTwice_1.MatchTheSameStringTwice
];
var select = document.getElementById('select');
var contentNode = document.getElementById('content');
select.children.length == 0 && lessons.forEach(function (value, index) {
    var option = document.createElement('option');
    option.value = index.toString();
    option.innerHTML = value.name;
    select.appendChild(option);
});
select.addEventListener('change', onSelect);
onSelect();
function onSelect() {
    removeAllChildNodesOf(contentNode);
    var lesson = lessons[select.selectedIndex];
    if (lesson.run != undefined) {
        lessons[select.selectedIndex].run(contentNode);
    }
    if (lesson.cases != undefined) {
        lesson.cases.forEach(function (value) {
            utils_1.createAndAppendRegexBlock(value.str, value.regEx, contentNode, value.comment);
        });
    }
}
function removeAllChildNodesOf(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
}
//# sourceMappingURL=index.js.map