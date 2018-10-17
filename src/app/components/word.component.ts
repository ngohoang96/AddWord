import {Component} from '@angular/core';
@Component({
    selector: 'app-word',
    template : `
    <h3></h3>
    <p>WOrd Component </p>
    <img src="{{imgSrc}}" >
    <img [src]=imgSrc>
    <h3>Count ={{count}}</h3>
    <button (click)="increase();">
        increase
    </button>
    `,
    styles:[
        
    ]
})


export class WordComponent{
    imgSrc = ''
    en = 'One';
    vn = 'Mot';
    count = 0;
    increase() {
        return this.count++
    }
}
