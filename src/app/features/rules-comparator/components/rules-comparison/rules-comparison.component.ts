import {Component, OnInit} from '@angular/core';
import {Rule} from '../../../../shared/models/rule';

@Component({
  selector: 'rules-comparison',
  templateUrl: './rules-comparison.component.html',
  styleUrls: ['/rules-comparison.component.scss']
})
export class RulesComparisonComponent implements OnInit {

  firstIterationRules: Rule[];
  secondIterationRules: Rule[];

  sameRules: Rule[] = [];
  altered_rules: Rule[] = [];
  removedRules: Rule[] = [];

  value = '';
  shared = false;

  ngOnInit(): void {
    const firstRules = localStorage.getItem('firstIteration');
    const secondRules = localStorage.getItem('secondIteration');

    this.firstIterationRules = <Rule[]>JSON.parse(firstRules);
    this.secondIterationRules = <Rule[]>JSON.parse(secondRules);

    this.firstIterationRules.forEach((rule: Rule) => {
      if (this.secondIterationRules.findIndex(r => r.left.value === rule.left.value
          && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
        this.sameRules.push(rule);
      } else {
        console.log('Checking for altered rules');
        if (this.secondIterationRules.findIndex(r => r.left.value === rule.left.value
            && (r.right1.value === rule.right1.value || r.right2.value === rule.right2.value)) !== -1) {
          this.altered_rules.push(rule);
        } else {
          this.removedRules.push(rule);
        }
      }
    });
  }

  selectRuleClass(rule: Rule): string {
    if (this.sameRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'same';
    } else if (this.altered_rules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'altered';
    } else if (this.removedRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'removed';
    } else {
      return 'new';
    }
  }
}

