if (process.env.NODE_ENV !== 'production') {
  require('./index.html')
}
if (module.hot) {
  module.hot.accept();
}
require('./index.css');
import {ILesson} from './ILesson';
import {createAndAppendRegexBlock} from './utils';
import {Introduction} from './Introduction';
import {FindPlainTextPatterns} from './FindPlainTextPatterns';
import {FindRepeatedPatterns} from './FindRepeatedPatterns';
import {FindSetsOfCharacters} from './FindSetsOfCharacters';
import {UseShorthandToFindCommonSetsOfCharacters} from './UseShorthandToFindCommonSetsOfCharacters';
import {FindGroupsOfCharacters} from './FindGroupsOfCharacters';
import {FindAStringThatPrecedesAnotherString} from './FindAStringThatPrecedesAnotherString';
import {FindTheStartAndEndOfWholeWords} from './FindTheStartAndEndOfWholeWords';
import {MatchTheSameStringTwice} from './MatchTheSameStringTwice';
import {MatchTheStartAndEndOfALine} from './MatchTheStartAndEndOfALine';

const lessons: ILesson[] = [
  Introduction,
  FindPlainTextPatterns,
  FindRepeatedPatterns,
  FindSetsOfCharacters,
  UseShorthandToFindCommonSetsOfCharacters,
  FindGroupsOfCharacters,
  FindAStringThatPrecedesAnotherString,
  FindTheStartAndEndOfWholeWords,
  MatchTheSameStringTwice,
  MatchTheStartAndEndOfALine
];
const select: HTMLSelectElement = document.getElementById('select') as HTMLSelectElement;
const contentNode = document.getElementById('content') as HTMLDivElement;

select.children.length == 0 && lessons.forEach(function (value, index) {
  let option = document.createElement('option');
  option.value = index.toString();
  option.innerHTML = value.name;
  select.appendChild(option);
});

select.addEventListener('change', onSelect);
onSelect();

function onSelect() {
  removeAllChildNodesOf(contentNode);
  let lesson = lessons[select.selectedIndex];
  if (lesson.run != undefined) {
    lessons[select.selectedIndex].run(contentNode);
  }
  if (lesson.cases != undefined) {
    lesson.cases.forEach(value => {
      createAndAppendRegexBlock(value.str,
        value.regEx, contentNode, value.comment);
    })
  }
}

function removeAllChildNodesOf(element: HTMLElement) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}