import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesDirective
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
