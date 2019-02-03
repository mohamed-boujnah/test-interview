import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DropdownWidgetComponent } from './components/dropdown-widget/dropdown-widget.component';
import { WofurComponent } from './components/wofur/wofur.component';

@NgModule({
  declarations: [
    AppComponent,
    DropdownWidgetComponent,
    WofurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
