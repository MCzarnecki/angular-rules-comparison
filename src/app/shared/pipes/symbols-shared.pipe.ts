import {Pipe, PipeTransform} from '@angular/core';
import {Rule} from '../models/rule';

@Pipe({name: 'symbolSharedSearch'})
export class SymbolSharedSearchPipe implements PipeTransform {
  transform(rules: Rule[], shared: Rule[], show: boolean): Rule[] {
    if (!show || shared === []) {
      return rules;
    }

    return rules.filter((rule: Rule) => shared.findIndex((r: Rule) => r.left.value === rule.left.value
      && r.right1.value === rule.right1.value && r.right2.value === rule.right2.value) === -1);
  }
}
