import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import {RulesComponent } from './app.component';
import {SharedModule} from './shared/shared.module';
import {AppRoutingModule} from './app-routing.module';
import {CoreModule} from './core/core.module';


@NgModule({
  declarations: [
    RulesComponent
  ],
  imports: [
    SharedModule,
    CoreModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [RulesComponent]
})
export class AppModule { }
