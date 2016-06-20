export interface ILesson {
    name: string;
    run?: (contentNode: HTMLElement) => void;
    cases?: {
        comment?: string;
        regEx: RegExp;
        str: string;
    }[]
}