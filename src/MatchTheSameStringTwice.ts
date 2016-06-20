import {ILesson} from './ILesson';

const thething = 'it was the the thing thing';
const someHtml = '<b>Bold</b><i>Italics</i>';
const htmlExtractor = /<(\w+)>(.*)<\/\1>/g;

export const MatchTheSameStringTwice: ILesson = {
  name: '08 - Match the Same String Twice',
  cases: [
      {
      comment: 'Find the followed by another the',
      str: thething,
      regEx: /(the)\s?(\1)/g
    },
    {
      comment: 'Find the followed by another the but only match the first',
      str: thething,
      regEx: /(the)\s?(?=\1)/g
    },
    {
      comment: 'Find a word followed by another same word but only match the first',
      str: thething,
      regEx: /(\w+)\s?(?=\1)/g
    },
    {
      comment: `Extract content out of html:
      ${someHtml.replace(htmlExtractor, '$2\n')}`,
      str: someHtml,
      regEx: htmlExtractor
    }
  ]
}
