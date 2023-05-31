import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InlineStyleComponent } from './inline-style/inline-style.component';
import { InlineTemplateComponent } from './inline-template/inline-template.component';
import { InlineComponent } from './inline/inline.component';
import { MyDirectivesDirective } from './my-directives.directive';
import { PipesPipe } from './pipes.pipe';
import { AgePipe } from './pipes/age.pipe';

@NgModule({
  declarations: [
    AppComponent,
    InlineStyleComponent,
    InlineTemplateComponent,
    InlineComponent,
    MyDirectivesDirective,
    PipesPipe,
    AgePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
