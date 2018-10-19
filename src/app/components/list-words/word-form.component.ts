import { Component,Output,EventEmitter } from '@angular/core'
import { Word } from './word';
@Component({
    selector: 'app-word-form',
    template: `
    <div style="margin-top: 20px">
        <button class = "btn btn-success" >
                add new word
        </button>
        <div class="form-group word-form" >
        <input 
            placeholder="English"
            class ="form-control"
            [(ngModel)] ="txtEn"
        />
        <br/>
        <input class = "form-control"
            placeholder="Vietnamese"
            [(ngModel)] ="txtVn"
        />
       
    <br/>
        <div  >
        <button class = "btn btn-success"
       
        >
            Add Word

        </button>
        <button class = "btn btn-danger">
            Cancle
        </button>
        </div>
        </div>
    </div> 
    
    `
})
export class WordFormComponent {
    
    txtEn ='';
    txtVn= '';
    shouldShowForm = false;
   
}
//@Output() onAddWord = new EventEmitter<Word>();
// toggleForm() {
//     this.shouldShowForm = !this.shouldShowForm;
// }
// addWord(){
//     const word = new Word(this.txtEn,this.txtVn,false);
//     this.onAddWord.emit(word);
//     this.txtEn='';
//     this.txtVn='';
//     this.shouldShowForm=false;
// }