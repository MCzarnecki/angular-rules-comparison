import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ComparisonTableComponent} from './components/comparison-table/comparison-table.component';
import {SymbolSharedSearchPipe} from './pipes/symbols-shared.pipe';
import {SymbolSearchPipe} from './pipes/symbols.pipe';

const declarations = [ComparisonTableComponent, SymbolSearchPipe,
  SymbolSharedSearchPipe];

const imports = [CommonModule, HttpClientModule, ReactiveFormsModule, FormsModule];

@NgModule({
  imports,
  declarations,
  exports: [imports, declarations]
})
export class SharedModule {

}
