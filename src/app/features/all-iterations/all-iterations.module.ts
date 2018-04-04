import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {IterationsInputView} from './containers/input/iterations-input';
import {AllIterationsRoutingModule} from './all-iterations-routing.module';

const declarations = [IterationsInputView];

const imports = [SharedModule, AllIterationsRoutingModule];

@NgModule({
  declarations,
  imports
})
export class AllIterationsModule { }
