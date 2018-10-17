import { Component ,Input,Output,EventEmitter} from '@angular/core'
@Component({
    selector: 'app-word-filter',
    template: `
    <select style = "width: 200px" 
            [value]="filterMode" 
            (change)= "onSetFilterMode.emit($event.target.value)"
    
    >
    <option value="SHOW_ALL">SHOW_ALL </option>
    <option value="SHOW_FORGOT">SHOW_FORGOT </option>
    <option value="SHOW_MEMORIZED">SHOW_MEMORIZED</option>

    </select>
    
    `
})
export class WordFilterComponent {
    @Input() filterMode: string;
    @Output() onSetFilterMode = new EventEmitter<string>();
    // setFilterMode(event){
    //     this.onSetFilterMode.emit(event.target.value)

    // }
}