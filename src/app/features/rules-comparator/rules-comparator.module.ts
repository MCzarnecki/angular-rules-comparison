import {NgModule} from '@angular/core';
import {RulesComparisonView} from './containers/rules-comparison.view';
import {SharedModule} from '../../shared/shared.module';
import {RulesComparatorRoutingModule} from './rules-comparator-routing.module';
import {RulesComparisonInputComponent} from './components/input/rules-comparison-input';
import {RulesComparisonComponent} from './components/rules-comparison/rules-comparison.component';
import {SymbolSearchPipe} from './services/symbols.pipe';
import {SymbolSharedSearchPipe} from './services/symbols-shared.pipe';

const imports = [RulesComparatorRoutingModule, SharedModule];

const declarations = [
  RulesComparisonView,
  RulesComparisonInputComponent,
  RulesComparisonComponent,
  SymbolSearchPipe,
  SymbolSharedSearchPipe
];

@NgModule({
  declarations,
  imports
})
export class RulesComparatorModule {

}
