import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineComponent } from './inline/inline.component';
import { MyDirectivesDirective } from './my-directives.directive';

@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    InlineComponent,
    MyDirectivesDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
