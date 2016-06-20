"use strict";
exports.Introduction = {
    name: '00 - Introduction',
    run: function (contentNode) {
        var str = "Is this This?";
        // A and B are equivalent
        var regexA = new RegExp("is");
        var regexB = /is/;
        console.log(regexA.test(str)); // true
        // The exec method returns array with the
        // results.
        console.log(regexB.exec(str)); // ["is", index: 5, input: "Is this This?"]
        // Flags
        var regexC = /is/g; // or new Regexp("is", "g")
        // The g flag will make the regex state aware so when
        // called again will return next result or null
        console.log(regexC.exec(str)); // ["is", index: 5, input: "Is this This?"]
        console.log(regexC.exec(str)); // ["is", index: 10, input: "Is this This?"]
        console.log(regexC.exec(str)); // null
        console.log(regexC.exec(str)); // ["is", index: 5, input: "Is this This?"]
        // The i flag (ignore case)
        var regexD = /is/gi;
        console.log(regexD.exec(str)); // ["Is", index: 0, input: "Is this This?"]
        // String prototype has a match method
        console.log(str.match(regexD)); // ["Is", "is", "is"]
        // Works with replace to
        console.log(str.replace(regexD, 'XX')); // XX thXX ThXX?
        console.log(str.search(regexD)); // 0
    }
};
//# sourceMappingURL=Introduction.js.map