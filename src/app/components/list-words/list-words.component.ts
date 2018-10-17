import {Component} from '@angular/core'
import { Word ,WORDS } from './word';
@Component({
    selector : 'app-list-words',
    template:
        `<app-word-filter [filterMode]="filterMode" (onSetFilterMode)=onSetFilterMode($event) > </app-word-filter>
        <app-word-form (onAddWord)="onAddWord($event)"></app-word-form>
        
        <div class="word" *ngFor="let word of filteredWords">
            <app-word-item [wordInfo]="word"
            (onRemoveWord)="onRemoveWord($event)"
            (onToggleWord)= "onToggleWord($event)"
            >
                            
            
            </app-word-item>
        </div>
        <pre>{{filterMode}}</pre>
        
        `,

})
export class ListWordsComponent {
    words = WORDS;
    
    shouldShowForm = false;
    filterMode = 'SHOW_ALL';
    onAddWord(word: Word){
        this.words.push(word);
    }

    onRemoveWord(_id : string) { 
        const index = this.words.findIndex(w =>w._id === _id);
        this.words.splice(index , 1);
    }
    onToggleWord(_id : string){
        const word = this.words.find(w => w._id === _id)
        word.isMemorized = !word.isMemorized;
    }
    get filteredWords(){
        return this.words.filter(word => {
            if(this.filterMode === "SHOW_ALL") return true;
            if(this.filterMode === "SHOW_FORGOT") return !word.isMemorized;
            return word.isMemorized;
            
        })
    }
    onSetFilterMode(filterMode: string){
        this.filterMode = filterMode;

    }
}
