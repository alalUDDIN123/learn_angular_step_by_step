import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CustomDirectivesDirective } from './directives/custom-directives.directive';
import { CustomWithParamsDirective } from './directives/custom-with-params.directive';


@NgModule({
  declarations: [
    AppComponent,
    CustomDirectivesDirective,
    CustomWithParamsDirective,
   
  
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
