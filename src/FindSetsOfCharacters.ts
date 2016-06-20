import {ILesson} from './ILesson';
import {createAndAppendRegexBlock} from './utils';

export const FindSetsOfCharacters = {
    name: '03 - FindSetsOfCharacters',
    run: function (contentNode: HTMLElement) {
        const str = `cat mat bat Hat ?at 0at ðat`;

        let regex = /[cb]at/g;
        let comment = 'We create character class with [cb] that matches either b or c. Order is not important';
        createAndAppendRegexBlock(str, regex, contentNode, comment);

        regex = /[^cb]at/g;
        comment = "We can negate character class with ^";
        createAndAppendRegexBlock(str, regex, contentNode, comment);

        regex = /[a-ö]at/g;
        comment = "We can have characher ranges";
        createAndAppendRegexBlock(str, regex, contentNode, comment);

        regex = /[a-öA-Ö]at/g;
        comment = "We can have union of ranges";
        createAndAppendRegexBlock(str, regex, contentNode, comment);

    }
};