import {Component} from '@angular/core';
import {Iteration} from '../../../../shared/models/iteration';
import {RulesComparison} from '../../../../shared/models/rules-comparison.model';
import {isUndefined} from 'util';
import {ComparisonService} from '../../../../core/services/comparison.service';

@Component({
  selector: 'rules-iterations-input',
  templateUrl: './iterations-input.html'
})
export class IterationsInputView {

  constructor(private comparisonService: ComparisonService) { }

  iterations: Iteration[];

  firstIteration: Iteration;
  secondIteration: Iteration;
  rulesComparison: RulesComparison;

  handleFileUpload(files: FileList): void {
    console.log(files);
    const file = files[0];
    const reader = new FileReader();
    reader.onload = () => {
      this.iterations = JSON.parse(reader.result);
      console.log(JSON.parse(reader.result));
    };
    reader.readAsText(file);
  }

  firstItSelected(index: number): void {
    this.firstIteration = this.iterations[index];
    if (!isUndefined(this.secondIteration)) {
      this.rulesComparison = this.comparisonService.compareRules(this.firstIteration.rules, this.secondIteration.rules);
    }
  }

  secondItSelected(index: number): void {
    this.secondIteration = this.iterations[index];
    if (!isUndefined(this.firstIteration)) {
      this.rulesComparison = this.comparisonService.compareRules(this.firstIteration.rules, this.secondIteration.rules);
    }
  }

}
