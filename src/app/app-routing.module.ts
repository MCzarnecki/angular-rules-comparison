import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const app_routes = [
  {path: 'rules', loadChildren: 'app/features/rules-comparator/rules-comparator.module#RulesComparatorModule'},
  {path: 'iterations', loadChildren: 'app/features/all-iterations/all-iterations.module#AllIterationsModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
