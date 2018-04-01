import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

const app_routes = [
  {path: '', loadChildren: 'app/features/rules-comparator/rules-comparator.module#RulesComparatorModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
