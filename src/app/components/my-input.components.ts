import {Component} from '@angular/core';

@Component({
    selector: 'app-my-input',
    template : `
            <div class ="form-group" style="margin : 10px">
                <input 
                    class="form-control" placeholder="Enter Your Email" 
                    [(ngModel)]="txtEmail"
                
                
                />
                <br>
                <button (click) = "show();">Show</button>
                <pre>{{txtEmail}}</pre>
            </div>
    `
})


export class MyInputComponent{
    txtEmail ='';

    show(){
        alert(this.txtEmail)
        this.txtEmail = ''
    }
}
