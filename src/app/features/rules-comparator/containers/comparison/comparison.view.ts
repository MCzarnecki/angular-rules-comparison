import {Component, OnInit} from '@angular/core';
import {ComparisonService} from '../../../../core/services/comparison.service';
import {Rule} from '../../../../shared/models/rule';
import {RulesComparison} from '../../../../shared/models/rules-comparison.model';

@Component({
  selector: 'comparison-view',
  templateUrl: './comparison.view.html'
})
export class ComparisonView  implements OnInit {

  firstIterationRules: Rule[];
  secondIterationRules: Rule[];
  rulesComparison: RulesComparison;

  constructor(private comparisonService: ComparisonService) { }

  ngOnInit(): void {
    const firstRules = localStorage.getItem('firstIteration');
    const secondRules = localStorage.getItem('secondIteration');

    this.firstIterationRules = <Rule[]>JSON.parse(firstRules);
    this.secondIterationRules = <Rule[]>JSON.parse(secondRules);
    this.rulesComparison = this.comparisonService.compareRules(this.firstIterationRules, this.secondIterationRules);
  }

}
