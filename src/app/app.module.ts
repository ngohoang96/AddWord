import { WordItemComponent } from './components/list-words/word-item.component';
import { WordFilterComponent } from './components/list-words/word-filter.component';
import { PersonComponent } from './components/person.component';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { AppComponent } from './app.component';

import {WordComponent } from './components/word.component';
import {MyInputComponent } from './components/my-input.components';
import { ListWordsComponent } from './components/list-words/list-words.component';
import { WordFormComponent } from './components/list-words/word-form.component';


import { ChildComponent } from './components/interact/child.component';
import { ParenComponent } from './components/interact/parent.component';
import { countReducer } from './components/interact/countReducer';
import {StoreModule } from '@ngrx/store'
import { wordsReducer, shouldShowFormReducer, filterModeReducer } from './components/list-words/reducers';


//serveri 
import {HttpModule} from '@angular/http'
@NgModule({
  declarations: [
    AppComponent,
    WordComponent,
    MyInputComponent,
    PersonComponent,
    ListWordsComponent,
    WordFilterComponent,
    WordFormComponent,
    WordItemComponent,
    ChildComponent,
    ParenComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    StoreModule.forRoot({
      // count: countReducer,
     
      words: wordsReducer,
      shouldShowForm: shouldShowFormReducer,
      filterMode: filterModeReducer
    
    
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
