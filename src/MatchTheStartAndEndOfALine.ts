import {ILesson} from './ILesson';

const str = `12/1/16 12-16-13`;

export const MatchTheStartAndEndOfALine: ILesson = {
  name: '09 - Match the Start and End of a Line',
  cases: [
    {
      comment: 'Outside of character group ^ means beginning of line',
      str,
      regEx: /^12/g
    }
  ]
}