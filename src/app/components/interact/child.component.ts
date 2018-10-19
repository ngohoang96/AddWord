import { Component,EventEmitter,Output } from '@angular/core';
import {Store} from '@ngrx/store'
@Component({
    selector:'app-child',
    template:`
    <div>
    <button class="btn btn-success " (click)=" increase();"> Increase</button>
    <button class = "btn btn-warning" (click)=" decrease();"> Decrease</button>
    <button class = "btn btn-danger" (click)="reset();"> Reset</button>
    </div>
    `
})
export class ChildComponent{
    // @Output() onChange = new EventEmitter();
    // @Output() onIncrease = new EventEmitter();
    // @Output() onDecrease = new EventEmitter();
    // @Output() onReset = new EventEmitter();
    constructor(private store: Store<any>){

    }
    increase(){
        // this.onIncrease.emit();
        // this.onChange.emit(true);
        this.store.dispatch({type : 'INCREASE'})
    }
    decrease(){
        // this.onDecrease.emit();
        // this.onChange.emit(false);
        this.store.dispatch({type : 'DECREASE'})
    }
    reset(){
        // this.onReset.emit();
        this.store.dispatch({type : 'RESET'})
    }
}