import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { todoReducer } from './todo/reducers/todo.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    // StoreModule.forRoot({}, {})
    StoreModule.forRoot({ allTodos: todoReducer }),
    //  Registers the 'allTodos' feature key with the todoReducer in the Redux store

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
