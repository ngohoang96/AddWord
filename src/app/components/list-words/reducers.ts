import { Word, WORDS } from './word';

export function wordsReducer(state = WORDS, action): Word[] {
    if (action.type === 'REMOVE_WORD') {
        return state.filter(word => word._id !== action._id);
    }
    if (action.type === 'TOGGLE_WORD') {
        return state.map(word => {
            if (word._id !== action._id) return word;
            return { ...word, isMemorized: !word.isMemorized };
        });
    }
    if (action.type === 'ADD_WORD') {
        return state.concat(action.word);
    }
    return state;
}

export function shouldShowFormReducer(state = false, action): boolean {
    if (action.type === 'TOGGLE_FORM') return !state;
    if (action.type === 'ADD_WORD') return false;
    return state;
}

export function filterModeReducer(state = 'SHOW_ALL', action): string {
    if (action.type === 'SET_FILTER_MODE') return action.filterMode;
    return state;
}