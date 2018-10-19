import {Component, Input,Output, EventEmitter} from '@angular/core'
import { Word } from './word';
@Component ({
    selector:'app-word-item',
    template:`   
    <div class="word-container">
    <h3 class="text-success">{{wordInfo.en}}</h3>
    <h3 class="text-danger">
       {{ wordInfo.isMemorized? '------' : wordInfo.vn}}
    </h3>
    </div>
    <div class="btn-container">
    <button
        class="btn btn-success"
        (click)= "onToggleWord.emit(wordInfo._id)"
    >
        Memorized
    </button>
    <button
        class="btn btn-warning"
        (click)="onRemoveWord.emit(wordInfo._id);"
        
    >
        Remove
    </button>
    </div>
    `
})
export class WordItemComponent{
    @Input() wordInfo:Word;
    @Output() onRemoveWord  = new EventEmitter<string>();
    @Output() onToggleWord = new EventEmitter<string>();
}