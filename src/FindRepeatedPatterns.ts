import {ILesson} from './ILesson';
import {createAndAppendRegexBlock} from './utils';

export const FindRepeatedPatterns = {
    name: '02 - FindRepeatedPatterns',
    run: function (contentNode: HTMLElement) {
        let str = `aaaaaaa`;
        let regex = /aaaa/g;
        createAndAppendRegexBlock(str, regex, contentNode, undefined);

        regex = /a{4}/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'Shorter version with quantifier');

        regex = /a{5,}/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'At least 5 a\'s until infinity');

        regex = /a{5,6}/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'At least 5 a\'s but max 6');

        regex = /b{0,}/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'At least 0 b\'s until infinity. Notice how it it matching empty strings');

        regex = /b*/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'Same pattern as above, but shorter');

        regex = /a{1,}/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'At least 1 a\'s until infinity');

        regex = /a+/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'Same as above, made shorter with plus symbol');

        regex = /a{0,1}/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'Zero or one a, also matches empty string');

        regex = /a?/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'Same as above, made shorter with question mark symbol');

        str = `http://egghead.io
not a web address
http://
https://www.egghead.io`;
        regex = /https?:\/\/.+/g;
        createAndAppendRegexBlock(str, regex, contentNode, 'Math web addresses');

    }
};