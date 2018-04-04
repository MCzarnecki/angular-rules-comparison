import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {RulesComparisonPage} from './containers/rules.page';
import {RulesComparisonInputComponent} from './components/input/rules-comparison-input';
import {ComparisonView} from './containers/comparison/comparison.view';

const routes = [
  {path: '', component: RulesComparisonPage, children: [
    {path: '', component: RulesComparisonInputComponent},
    {path: 'comparison', component: ComparisonView}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RulesComparatorRoutingModule {

}
