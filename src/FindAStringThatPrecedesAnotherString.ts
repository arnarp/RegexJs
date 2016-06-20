import {ILesson} from './ILesson';

const str = `foo
foobar
foobaz
fooboo`;

export const FindAStringThatPrecedesAnotherString: ILesson = {
  name: '06 - Find a String That Precedes Another String',
  cases: [
    {
      comment: 'We can use a lookahead (positive lookahead) to find foo followed by bar or boo',
      str,
      regEx: /foo(?=bar|boo)/g
    },
    {
      comment: 'We can use negative lookahead to find foo not followed by bar or boo',
      str,
      regEx: /foo(?!bar|boo)/g
    }
  ]
}