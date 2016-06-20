import {ILesson} from './ILesson';
import {createAndAppendRegexBlock} from './utils';

export const FindPlainTextPatterns = {
    name: '01 - FindPlainTextPatterns',
    run: function (contentNode: HTMLElement) {
        const str = `Cat sat on the hats.`;
        const strWithLineBreaks =
        `Cat
sat on
the hats.`;
        let regex = /at/g;
        createAndAppendRegexBlock(str, regex, contentNode, undefined);

        regex = /.t/g;
        createAndAppendRegexBlock(str, regex, contentNode, undefined);

        regex = /.../g;
        createAndAppendRegexBlock(str, regex, contentNode, undefined);

        regex = /..../g;
        createAndAppendRegexBlock(strWithLineBreaks, regex, contentNode, undefined);

        regex = /\./;
        createAndAppendRegexBlock(str, regex, contentNode, undefined);

    }
};