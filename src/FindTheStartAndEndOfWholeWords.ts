import {ILesson} from './ILesson';

const str = `This island is his, it is`;

export const FindTheStartAndEndOfWholeWords: ILesson = {
  name: '07 - Find the Start and End of Whole Words',
  cases: [
    {
      comment: 'Let\'s capture the word "is", \\b is word boundary',
      str,
      regEx: /\bis\b/g
    },
    {
      comment: 'B is negation of b so this will find is that is not end of a word',
      str,
      regEx: /is\B/g
    }
  ]
}