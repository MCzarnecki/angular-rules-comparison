import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'rules-comparison-input',
  templateUrl: './rules-comparison-input.html'
})
export class RulesComparisonInputComponent implements OnInit {

  rulesForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.rulesForm = this.formBuilder.group({
      firstIteration: [''],
      secondIteration: ['']
    });
  }

  compare(): void {
    localStorage.setItem('firstIteration', this.rulesForm.get('firstIteration').value);
    localStorage.setItem('secondIteration', this.rulesForm.get('secondIteration').value);
    this.router.navigate(['./comparison']);
  }

  get firstIteration(): AbstractControl {
    return this.rulesForm.get('firstIteration');
  }

  get secondIteration(): AbstractControl {
    return this.rulesForm.get('secondIteration');
  }

}

