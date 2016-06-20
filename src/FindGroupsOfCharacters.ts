import {ILesson} from './ILesson';

const str = `foo
foobar
foobaz
fooboo`;
const phoneNumbers = `800-455-7823
(555) 456-8989
4568938989`;
const areaCodeRegex = /\(?(\d{3})\)?[\s-]?\d{3}[\s-]?\d{4}/g;

export const FindGroupsOfCharacters: ILesson = {
    name: '05 - Find Groups of Characters',
    cases: [
        {
            str,
            regEx: /foo(bar|boo)/g,
            comment: 'We create groups with parenthesis'
        },
        {
            str,
            regEx: /foo(bar|boo)?/g,
            comment: 'We can add quantifier to the group'
        },
        {
            str,
            regEx: /foo(bar|boo)/g,
            comment: `We can reference the capture group
str.replace(/foo(bar|boo)/g, '**$1**')
${str.replace(/foo(bar|boo)/g, '**$1**')}`
        },
        {
            str: phoneNumbers,
            regEx: areaCodeRegex,
            comment: `Let\'s extract area codes from phone numbers
${phoneNumbers.replace(areaCodeRegex, 'area code: $1')}`
        }
    ]
}