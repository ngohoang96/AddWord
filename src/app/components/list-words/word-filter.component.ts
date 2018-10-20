import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from './types';

@Component({
selector: 'app-word-filter',
template: `
    <select
      class="form-control"
      style="width: 200px;"
      [value]="filterMode"
      (change)="setFilterMode($event.target.value)"
    >
      <option value="SHOW_ALL">SHOW ALL</option>
      <option value="SHOW_FORGOT">SHOW FORGOT</option>
      <option value="SHOW_MEMORIZED">SHOW MEMORIZED</option>
    </select>
  `
})

export class WordFilterComponent {
  filterMode: string;
  constructor(private store: Store<AppState>) {
    this.store.select('filterMode').subscribe(f => this.filterMode = f);
  }

  setFilterMode(filterMode: string) {
    this.store.dispatch({ type: 'SET_FILTER_MODE', filterMode });
  }
}


// import { Component ,Input} from '@angular/core'
// import {Store} from '@ngrx/store'
// @Component({
//     selector: 'app-word-filter',
//     template: `
//     <select 
//             style = "width: 200px"
//             [value] = "filterMode"
//             (change)="setFilterMode($event.target.value)"
//     >
//     <option value="SHOW_ALL">SHOW_ALL </option>
//     <option value="SHOW_FORGOT">SHOW_FORGOT </option>
//     <option value="SHOW_MEMORIZED">SHOW_MEMORIZED</option>

//     </select>
//     <pre>{{filterMode}}</pre>
//     `
// })
// export class WordFilterComponent {
//     // @Input() filterMode: string;
//     // @Output() onSetFilterMode = new EventEmitter<string>();
//     // // setFilterMode(event){
//     //     this.onSetFilterMode.emit(event.target.value)

//     // }
//     filterMode : string;
//     constructor(private store : Store<any>){
        
//         this.store.select('filterMode').subscribe(f =>this.filterMode = f)
//     }
//     setFilterMode(filterMode: string){
//         this.store.dispatch({type: 'SET_FILTER_MODE',filterMode})
//     }
// } 