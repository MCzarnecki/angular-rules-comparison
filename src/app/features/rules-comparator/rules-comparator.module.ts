import {NgModule} from '@angular/core';
import {RulesComparisonPage} from './containers/rules.page';
import {SharedModule} from '../../shared/shared.module';
import {RulesComparatorRoutingModule} from './rules-comparator-routing.module';
import {RulesComparisonInputComponent} from './components/input/rules-comparison-input';
import {ComparisonView} from './containers/comparison/comparison.view';

const imports = [RulesComparatorRoutingModule, SharedModule];

const declarations = [
  ComparisonView,
  RulesComparisonPage,
  RulesComparisonInputComponent
];

@NgModule({
  declarations,
  imports
})
export class RulesComparatorModule {

}
