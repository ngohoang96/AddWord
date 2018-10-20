import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './types';
import { Word } from './word';

@Component({
  selector: 'app-word-item',
  template: `
    <div class="word-container">
      <h3 class="text-success">{{ wordInfo.en }}</h3>
      <h3 class="text-danger">
        {{ wordInfo.isMemorized ? '*******' : wordInfo.vn }}
      </h3>
      </div>
      <div class="btn-container">
      <button
        class="{{ wordInfo.isMemorized ? 'btn btn-success' : 'btn btn-danger' }}"
        (click)="toggleWord();"
      >
        {{ wordInfo.isMemorized ? 'Forgot' : 'Memorized' }}
      </button>
      <button
          class="btn btn-warning"
          (click)="removeWord();"
      >
          Remove
      </button>
    </div>
  `
})

export class WordItemComponent {
  @Input() wordInfo: Word;
  constructor(private store: Store<AppState>) {}

  removeWord() {
    this.store.dispatch({ type: 'REMOVE_WORD', _id: this.wordInfo._id });
  }

  toggleWord() {
    this.store.dispatch({ type: 'TOGGLE_WORD', _id: this.wordInfo._id });
  }
}


// import {Component, Input,Output, EventEmitter} from '@angular/core'
// import { Word } from './word';
// @Component ({
//     selector:'app-word-item',
//     template:`   
//     <div class="word-container">
//     <h3 class="text-success">{{wordInfo.en}}</h3>
//     <h3 class="text-danger">
//        {{ wordInfo.isMemorized? '------' : wordInfo.vn}}
//     </h3>
//     </div>
//     <div class="btn-container">
//     <button
//         class="btn btn-success"
        
//     >
//         Memorized
//     </button>
//     <button
//         class="btn btn-warning"        
//     >
//         Remove
//     </button>
//     </div>
//     `
// })
// export class WordItemComponent{
//     @Input() wordInfo:Word;
//     // @Output() onRemoveWord  = new EventEmitter<string>();
//     // @Output() onToggleWord = new EventEmitter<string>();
// }