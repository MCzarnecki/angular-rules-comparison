import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RulesComparisonView} from './containers/rules-comparison.view';
import {RulesComparisonInputComponent} from './components/input/rules-comparison-input';
import {RulesComparisonComponent} from './components/rules-comparison/rules-comparison.component';

const routes = [
  {path: '', component: RulesComparisonView, children: [
    {path: '', component: RulesComparisonInputComponent},
    {path: 'comparison', component: RulesComparisonComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesComparatorRoutingModule {

}
