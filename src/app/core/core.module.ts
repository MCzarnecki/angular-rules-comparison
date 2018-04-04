import {NgModule} from '@angular/core';
import {ComparisonService} from './services/comparison.service';

const providers = [ComparisonService];

@NgModule({
  providers
})
export class CoreModule { }
