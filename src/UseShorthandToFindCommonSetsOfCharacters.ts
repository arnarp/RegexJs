import {ILesson} from './ILesson';
import {createAndAppendRegexBlock} from './utils';

export const UseShorthandToFindCommonSetsOfCharacters: ILesson = {
    name: '04 - UseShorthandToFindCommonSetsOfCharacters',
    cases: [
        {
            str: `Aeiou $100 55.5% ð`,
            regEx: /[a-öA-Ö0-9]/g,
            comment: 'Match all alpa numeric characters'
        },
        {
            str: `Aeiou $100 55.5% ð`,
            regEx: /\w/g,
            comment: 'Shorthand version of above, except doesn match Icelandic characters'
        },
        {
            str: `Aeiou $100 55.5% ð`,
            regEx: /\d/g,
            comment: 'Shorthand for only digits'
        },
        {
            str: `Aeiou $100 55.5% ð`,
            regEx: /\s/g,
            comment: 'Shorthand for only whitespace'
        }
    ]
}