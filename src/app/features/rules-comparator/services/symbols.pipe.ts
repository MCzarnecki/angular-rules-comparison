import {Pipe, PipeTransform} from '@angular/core';
import {Rule} from '../../../shared/models/rule';

@Pipe({name: 'symbolSearch'})
export class SymbolSearchPipe implements PipeTransform {
  transform(rules: Rule[], symbolValue: string): Rule[] {

    if (symbolValue === '' || symbolValue === null) {
      return rules;
    }

    return rules.filter((rule: Rule) => rule.left.value === symbolValue ||
      rule.right1.value === symbolValue || rule.right2.value === symbolValue);
  }
}
