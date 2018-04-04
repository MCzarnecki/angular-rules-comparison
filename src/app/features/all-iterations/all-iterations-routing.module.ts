import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {IterationsInputView} from './containers/input/iterations-input';

const iterations_routes = [
  {path: '', component: IterationsInputView}
];

@NgModule({
  imports: [RouterModule.forChild(iterations_routes)],
  exports: [RouterModule]
})
export class AllIterationsRoutingModule { }
