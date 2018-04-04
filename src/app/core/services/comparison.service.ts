import {Injectable} from '@angular/core';
import {RulesComparison} from '../../shared/models/rules-comparison.model';
import {Rule} from '../../shared/models/rule';

@Injectable()
export class ComparisonService {

  compareRules(firstIterationRules: Rule[], secondIterationRules: Rule[]): RulesComparison {
    const sameRules = [];
    const alteredRules = [];
    const removedRules = [];

    firstIterationRules.forEach((rule: Rule) => {
      if (secondIterationRules.findIndex(r => r.left.value === rule.left.value
          && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
        sameRules.push({...rule});
      } else {
        console.log('Checking for altered rules');
        if (secondIterationRules.findIndex(r => r.left.value === rule.left.value
            && (r.right1.value === rule.right1.value || r.right2.value === rule.right2.value)) !== -1) {
          alteredRules.push({...rule});
        } else {
          removedRules.push({...rule});
        }
      }
    });
    return {sameRules: sameRules, alteredRules: alteredRules, removedRules: removedRules};
  }

  selectRules(rule: Rule, sameRules: Rule[], alteredRules: Rule[], removedRules: Rule[]): string {
    if (sameRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'same';
    } else if (alteredRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'altered';
    } else if (removedRules.findIndex(r => r.left.value === rule.left.value
        && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) !== -1) {
      return 'removed';
    } else {
      return 'new';
    }
  }
}

