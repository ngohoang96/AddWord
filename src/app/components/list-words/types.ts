import { Word } from './word';

export interface AppState {
    shouldShowForm: boolean;
    filterMode: string;
    words: Word[];
}