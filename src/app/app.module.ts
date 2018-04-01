import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RulesComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';


@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    SharedModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RulesComponent]
})
export class AppModule { }
