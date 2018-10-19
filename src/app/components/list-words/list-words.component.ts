import {Component,ViewChild} from '@angular/core'
import { Word ,WORDS } from './word';
import {WordFilterComponent} from './word-filter.component'
@Component({
    selector : 'app-list-words',
    template:
        `<app-word-filter> </app-word-filter>
        <app-word-form ></app-word-form>
        
        <div class="word" *ngFor="let word of filteredWords">
            <app-word-item [wordInfo] = "word"></app-word-item>
        </div>
        
        
        `,

})
export class ListWordsComponent {
    words = WORDS;
   
    get filteredWords(){
        return this.words.filter(word => {
            // if(this.filter.filterMode === "SHOW_ALL") return true;
            // if(this.filter.filterMode === "SHOW_FORGOT") return !word.isMemorized;
            // return word.isMemorized;
            return true;
        })
    }
   
    
}
 // @ViewChild(WordFilterComponent) filter: WordFilterComponent;
    // shouldShowForm = false;
    // filterMode = 'SHOW_ALL';
    // onAddWord(word: Word){
    //     this.words.push(word);
    // }

    // onRemoveWord(_id : string) { 
    //     const index = this.words.findIndex(w =>w._id === _id);
    //     this.words.splice(index , 1);
    // }
    // onToggleWord(_id : string){
    //     const word = this.words.find(w => w._id === _id)
    //     word.isMemorized = !word.isMemorized;
    // }
     // onSetFilterMode(filterMode: string){
    //     this.filterMode = filterMode;

    // }