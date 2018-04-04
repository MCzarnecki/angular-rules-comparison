import {Component, Input} from '@angular/core';
import {Rule} from '../../models/rule';
import {RulesComparison} from '../../models/rules-comparison.model';

@Component({
  selector: 'rules-comparison-table',
  templateUrl: './comparison-table.component.html',
  styleUrls: ['./comparison-table.component.scss']
})
export class ComparisonTableComponent {

  @Input()
  firstIterationRules: Rule[] = [];

  @Input()
  secondIterationRules: Rule[] = [];

  @Input()
  rulesComparison: RulesComparison;

  shared = false;

  value = '';

  selectRuleClass(rule: Rule): string {
    if (this.rulesComparison.sameRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'same';
    } else if (this.rulesComparison.alteredRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'altered';
    } else if (this.rulesComparison.removedRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'removed';
    } else {
      return 'new';
    }
  }

}

