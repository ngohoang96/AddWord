import { Component } from '@angular/core';
import {Store} from '@ngrx/store'
@Component({
    selector:'app-parent',
    template:`
        <div>
            <h3>Count = {{count}}</h3>
            <app-child></app-child>
        </div>
    
    `
})
export class ParenComponent{
    // count = 0
    //$event dc map voi isIncrease, chi duoc truyen 1 tham so event;
    // onChange(isIncresase: boolean){
    //     isIncresase? this.count++ : this.count-- ;

    // }
    // onIncrease(){this.count++};
    // onDecrease(){this.count--};
    // onReset(){this.count = 0};
    count : number;
    constructor(private store: Store<any>){
        this.store.select('count').subscribe(count =>this.count = count);
    }
}