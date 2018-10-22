import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Word } from './word';
import { AppState } from './types';
import {Http} from '@angular/http'
const URL ='api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml';
@Component({
    selector: 'app-list-words',
    template: `
        <app-word-form></app-word-form>
        <app-word-filter></app-word-filter>
        <div class="word" *ngFor="let word of filteredWords">
            <app-word-item [wordInfo]="word"></app-word-item>
        </div>
    `
})

export class ListWordsComponent {
    words: Word[];
    filterMode: string;
    constructor(private store: Store<AppState>, private http: Http) {
        this.store.select('words').subscribe(w => this.words = w);
        this.store.select('filterMode').subscribe(f => this.filterMode = f);
        this.http.get(URL)
        .toPromise()
        .then(res => res.json()) //mac dinh tra ve raw
        .then(resJson =>console.log(resJson.main.temp));
    }

    get filteredWords() {
        return this.words.filter(word => {
            if (this.filterMode === 'SHOW_ALL') return true;
            if (this.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
            return word.isMemorized;
        });
    }

}


// import {Component,ViewChild} from '@angular/core'
// import {Store} from '@ngrx/store'
// import { Word } from './word';
// import { AppState } from './types';
// @Component({
//     selector : 'app-list-words',
//     template:
//         ` 
        
//         <app-word-filter></app-word-filter>
//         <app-word-form></app-word-form>
//         <div class="word" *ngFor="let word of filteredWords">
//             <app-word-item [wordInfo]="word"></app-word-item>
//         </div>
       
//         `,

// })
// export class ListWordsComponent {
//     words: Word[];
//     filterMode: string;
//     constructor(private store: Store<AppState>) {
//         this.store.select('words').subscribe(w => this.words = w);
//         this.store.select('filterMode').subscribe(f => this.filterMode = f);
//     }
//     get filteredWords(){
//         return this.words.filter(word => {
//             if (this.filterMode === 'SHOW_ALL') return true;
//             if (this.filterMode === 'SHOW_FORGOT') return !word.isMemorized;
//             return word.isMemorized;
//         })
//     }
   
    
// }
//  // @ViewChild(WordFilterComponent) filter: WordFilterComponent;
//     // shouldShowForm = false;
//     // filterMode = 'SHOW_ALL';
//     // onAddWord(word: Word){
//     //     this.words.push(word);
//     // }

//     // onRemoveWord(_id : string) { 
//     //     const index = this.words.findIndex(w =>w._id === _id);
//     //     this.words.splice(index , 1);
//     // }
//     // onToggleWord(_id : string){
//     //     const word = this.words.find(w => w._id === _id)
//     //     word.isMemorized = !word.isMemorized;
//     // }
//      // onSetFilterMode(filterMode: string){
//     //     this.filterMode = filterMode;

//     // }