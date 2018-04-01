import {RuleOrigin} from './rule-origin';
import {Symbol} from './symbol';

export interface Rule {
  left: Symbol;
  right1: Symbol;
  right2: Symbol;
  origin: RuleOrigin;
}
