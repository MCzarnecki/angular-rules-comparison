import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

const imports = [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule];

@NgModule({
  imports,
  exports: [imports]
})
export class SharedModule {

}
