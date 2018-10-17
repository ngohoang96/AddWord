import { Component } from '@angular/core';
@Component({
    selector:'app-parent',
    template:`
        <div>
            <h3>Count = {{count}}</h3>
            <app-child  (onChange) = "onChange($event)"
                        (onIncrease)="onIncrease();"
                        (onDecrease)="onDecrease();"
                        (onReset) = "onReset()"
            
            ></app-child>
        </div>
    
    `
})
export class ParenComponent{
    count = 0
    //$event dc map voi isIncrease, chi duoc truyen 1 tham so event;
    onChange(isIncresase: boolean){
        isIncresase? this.count++ : this.count-- ;

    }
    onIncrease(){this.count++};
    onDecrease(){this.count--};
    onReset(){this.count = 0};
}