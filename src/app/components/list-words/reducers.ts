import {Word, WORDS} from './word'
export function wordsReducer(state = WORDS, action): Word[]{
    return state;
}
export function shouldShowFormReducer(state: false , action): boolean{
    return state;
}
export function filterModeReducer(state: 'SHOW_ALL', action): string{
    return state;
}