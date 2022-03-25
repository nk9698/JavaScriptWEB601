import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { YPipe } from './y.pipe';
import { YDirective } from './y.directive';
import { TypeFilterPipe } from './type-filter.pipe';
import { ContentListComponent } from './content-list/content-list.component';
import { HoverAffectDirective } from './hover-affect.directive';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    YPipe,
    YDirective,
    TypeFilterPipe,
    ContentListComponent,
    HoverAffectDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
