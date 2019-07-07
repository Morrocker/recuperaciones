import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {Router} from '@angular/router';

const MOT = [
  'robo',
  'virus',
  'respaldo'
];

@Component({
  selector: 'app-request-form',
  templateUrl: './request-form.component.html',
  styleUrls: ['./request-form.component.css']
})
export class RequestFormComponent implements OnInit {
  motivos;
  machines;
  requestForm;

  onSubmit(): void {
    this.router.navigateByUrl('/request/list');
  }

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
  ) {
    this.requestForm = this.formBuilder.group({
      name: '',
      phone: '',
      city: '',
      region: '',
      street: '',
      sNumber: '',
      other: '',
      motive: '',
      fromTime: '',
      toTime: ''
    });
  }

  ngOnInit() {
    this.motivos = MOT;
  }

}
