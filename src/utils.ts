export const createAndAppendRegexBlock =
    (str: string, regex: RegExp,
    contentNode: HTMLElement,
    comment: string) => {
    if (comment != undefined) {
        const commentNode = document.createElement('pre');
        commentNode.innerHTML = comment;
        contentNode.appendChild(commentNode);
    }
    const regExNode = document.createElement('pre');
    regExNode.innerHTML = regExToString(regex);
    contentNode.appendChild(regExNode);
    const textNode = document.createElement('pre');
    contentNode.appendChild(textNode);
    output(str, regex, textNode);
    contentNode.appendChild(document.createElement('hr'));

}

const output = (str: string, regex: RegExp, target: HTMLElement) => {
    target.innerHTML =
        str.replace(regex, str => `<span>${str}</span>`);
}

const regExToString = (regex: RegExp) => {
    return `RegEx: ${regex.source}, global: ${regex.global}, ignoreCase: ${regex.ignoreCase}, multiLine: ${regex.multiline}`;
}