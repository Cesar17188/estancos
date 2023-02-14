import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Form, FormControl ,FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AgeService } from '@core/services/age/age.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
export class IndexComponent implements OnInit {


  actualDate: Date = new Date();
  dateDay = new FormControl('');
  dateMonth = new FormControl('');
  dateYear = new FormControl('');

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private ageService: AgeService,
  ) {
  }

  ngOnInit(): void {
  }

  dmytoDate() {
    let birthDate = this.dateYear.value + '-' + this.dateMonth.value + '-' + this.dateDay.value;
    let date = this.ageService.getAge(birthDate);
    if (date >= 18) {
      this.router.navigate(['/home']);
    }else {
      alert('No es mayor de edad');
    }
  }


}
