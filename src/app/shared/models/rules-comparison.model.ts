import {Rule} from './rule';

export interface RulesComparison {
  sameRules: Rule[];
  alteredRules: Rule[];
  removedRules: Rule[];
}
